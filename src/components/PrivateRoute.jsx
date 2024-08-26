import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "../redux/auth/selectors";

const PrivateRoute = ({ element: Component, ...rest }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return isLoggedIn ? <Component {...rest} /> : <Navigate to="/login" />;
};

export default PrivateRoute;
