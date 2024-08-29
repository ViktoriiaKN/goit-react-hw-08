import { useSelector } from "react-redux";
import { selectVisibleContacts } from "../../redux/contacts/slice";
import s from "./ContactList.module.css";
import Contact from "../Contact/Contact";

const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);

  return (
    <ul className={s.contactList}>
      {contacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

export default ContactList;
