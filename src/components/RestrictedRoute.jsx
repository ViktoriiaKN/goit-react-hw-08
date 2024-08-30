import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "../redux/auth/selectors";

const RestrictedRoute = ({ children, redirectTo = "/" }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return isLoggedIn ? <Navigate to={redirectTo} /> : children;
};

export default RestrictedRoute;
