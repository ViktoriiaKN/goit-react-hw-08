import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
import style from "./Contact.module.css";

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
