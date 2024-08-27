import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/operations";
import s from "./UserMenu.module.css";

import { selectUser } from "../../redux/auth/selectors";
import { selectContacts } from "../../redux/contacts/selectors";

const UserMenu = () => {
  const user = useSelector(selectUser);
  const quantity = useSelector(selectContacts);

  const dispatch = useDispatch();
  return (
    <>
      <h1>{`Welcome ${user.name}`}</h1>
      <p>{`Saved contacts: ${quantity.length}`}</p>
      <button
        className={s.button}
        type="button"
        onClick={() => {
          dispatch(logout());
        }}
      >
        Log out
      </button>
    </>
  );
};

export default UserMenu;
