import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { login } from "../../redux/auth/operations";
import { getIsLoggedIn, getError } from "../../redux/auth/selectors";
import style from "./LoginPage.module.css";
import { useEffect } from "react";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(getIsLoggedIn);
  const error = useSelector(getError);

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/contacts");
    }
  }, [isLoggedIn, navigate]);

  const initialValues = { email: "", password: "" };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string().min(6, "Password too short").required("Required"),
  });

  const handleSubmit = (values, options) => {
    dispatch(login(values));
    options.resetForm();
  };

  return (
    <div className={style.loginContainer}>
      <h1>Login</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={style.formContainer}>
          <div className={style.formField}>
            <label htmlFor="email">Email</label>
            <Field name="email" type="email" className={style.inputField} />
            <ErrorMessage
              name="email"
              component="div"
              className={style.errorMessage}
            />
          </div>
          <div className={style.formField}>
            <label htmlFor="password">Password</label>
            <Field
              name="password"
              type="password"
              className={style.inputField}
            />
            <ErrorMessage
              name="password"
              component="div"
              className={style.errorMessage}
            />
          </div>
          <button type="submit" className={style.submitButton}>
            Login
          </button>
          <p>
            Don`t have an account yet?<Link to="/register">Sign up!</Link>
          </p>
          {error && <p className={style.error}>{error}</p>}
        </Form>
      </Formik>
    </div>
  );
};

export default LoginPage;
