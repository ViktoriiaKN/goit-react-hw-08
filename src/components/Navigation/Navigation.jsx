import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "../../redux/auth/selectors";

const Navigation = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <ul className={s.list}>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      {isLoggedIn && (
        <li>
          <NavLink to="/contacts">Contacts</NavLink>
        </li>
      )}
    </ul>
  );
};

export default Navigation;
