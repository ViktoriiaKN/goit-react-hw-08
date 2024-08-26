import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getIsLoggedIn, getIsRefreshing } from "./redux/auth/selectors";
import { refreshUser } from "./redux/auth/operations";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import PrivateRoute from "./components/PrivateRoute";
import RestrictedRoute from "./components/RestrictedRoute";
import { Navigate } from "react-router-dom";

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(getIsRefreshing);
  const isLoggedIn = useSelector(getIsLoggedIn);
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return !isRefreshing ? (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/login"
          element={<RestrictedRoute element={LoginPage} />}
        />
        <Route
          path="/register"
          element={<RestrictedRoute element={RegistrationPage} />}
        />
        <Route
          path="/contacts"
          element={
            isLoggedIn ? (
              <PrivateRoute element={ContactsPage} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </Router>
  ) : (
    <p>Loading...</p>
  );
};

export default App;
