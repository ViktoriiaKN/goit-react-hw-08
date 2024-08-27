import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <ul className={s.list}>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>{isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}</li>
    </ul>
  );
};

export default Navigation;
