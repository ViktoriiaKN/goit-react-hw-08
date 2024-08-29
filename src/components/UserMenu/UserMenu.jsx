import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/operations";
import s from "./UserMenu.module.css";

import { getUser } from "../../redux/auth/selectors";
import { getContacts } from "../../redux/contacts/selectors";

const UserMenu = () => {
  const user = useSelector(getUser);
  const quantity = useSelector(getContacts);

  const dispatch = useDispatch();
  return (
    <div className={s.userMenu}>
      <h1 className={s.welcomeText}>{`Welcome ${user.name}`}</h1>
      <p className={s.contactCount}>{`Saved contacts: ${quantity.length}`}</p>
      <button
        className={s.button}
        type="button"
        onClick={() => {
          dispatch(logout());
        }}
      >
        Log out
      </button>
    </div>
  );
};

export default UserMenu;
