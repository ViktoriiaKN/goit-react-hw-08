import { useDispatch } from "react-redux";
import s from "./Contact.module.css";
import { deleteContact } from "../../redux/contacts/operations";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <li className={s.contactItem}>
      <div className={s.contactWrapper}>
        <p className={s.contactName}>{contact.name}</p>
        <p className={s.contactNumber}>{contact.number}</p>
      </div>
      <button
        className={s.deleteButton}
        onClick={() => dispatch(deleteContact(contact.id))}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
