import { useDispatch } from "react-redux";
import style from "./Contact.module.css";
import { deleteContact } from "../../redux/contacts/operations";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <li className={style.contactItem}>
      <div className={style.contactWrapper}>
        <p className={style.contactName}>{contact.name}</p>
        <p className={style.contactNumber}>{contact.number}</p>
      </div>
      <button
        className={style.deleteButton}
        onClick={() => dispatch(deleteContact(contact.id))}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
