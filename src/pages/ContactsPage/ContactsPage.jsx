import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getContacts,
  getIsLoading,
  getError,
} from "../../redux/contacts/selectors";
import { fetchContacts } from "../../redux/contacts/operations";
import ContactList from "../../components/ContactList/ContactList";
import ContactForm from "../../components/ContactForm/ContactForm"; // Імпортуємо компонент для додавання контактів

const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Contacts</h1>
      {/* Додаємо компонент форми для додавання контактів */}
      <ContactForm />
      {contacts.length > 0 ? <ContactList /> : <p>No contacts found</p>}
    </div>
  );
};

export default ContactsPage;
