import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import {
  fetchContacts,
  addContact,
  deleteContact,
} from "../contacts/operations";

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
      });
  },
});

// Селектор для отримання всіх контактів
export const selectContacts = (state) => state.contacts.items;

// Селектор для отримання фільтра (якщо є)
export const selectFilter = (state) => state.filter;

// Селектор для отримання відфільтрованих контактів
export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter((contact) => {
      // Перевіряємо, чи contact.name і filter не є undefined
      const contactName = contact.name ? contact.name.toLowerCase() : "";
      const lowerFilter = filter ? filter.toLowerCase() : "";
      return contactName.includes(lowerFilter);
    });
  }
);

export default contactsSlice.reducer;
