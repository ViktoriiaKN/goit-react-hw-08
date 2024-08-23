import { useSelector } from "react-redux";
import { selectVisibleContacts } from "../../redux/contactsSlice";
import style from "./ContactList.module.css";
import Contact from "../Contact/Contact";

const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);

  return (
    <ul className={style.contactList}>
      {contacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

export default ContactList;
