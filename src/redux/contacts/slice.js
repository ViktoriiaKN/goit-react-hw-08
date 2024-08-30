import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import {
  fetchContacts,
  addContact,
  deleteContact,
} from "../contacts/operations";
import { logout } from "../auth/operations";

const initialState = {
  items: [],
  isLoading: false,
  error: null,
  filter: "",
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addContact.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items.push(action.payload); // Додаємо новий контакт до списку
      })
      .addCase(addContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteContact.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = state.items.filter(
          (contact) => contact.id !== action.payload
        );
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(logout.fulfilled, () => initialState);
  },
});

// Selectors
export const selectContacts = (state) => state.contacts.items;

export const selectFilter = (state) => state.filters;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter((contact) => {
      const contactName = contact.name ? contact.name.toLowerCase() : "";
      const lowerFilter = filter ? filter.toLowerCase() : "";
      return contactName.includes(lowerFilter);
    });
  }
);

export default contactsSlice.reducer;
