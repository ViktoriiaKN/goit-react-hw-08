import { Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { login } from "../../redux/auth/operations";
import s from "./LoginForm.module.css";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const LoginForm = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  const initialvalues = {
    email: "",
    password: "",
  };

  const handleSubmit = (values, options) => {
    dispatch(login(values));
    options.resetForm();
  };

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <div className={s.formWrapper}>
      <Formik initialValues={initialvalues} onSubmit={handleSubmit}>
        <Form className={s.form}>
          <Field
            className={s.input}
            name="email"
            placeholder="Enter your Email"
          />
          <Field
            className={s.input}
            name="password"
            placeholder="Enter your Password"
            type="password"
          />
          <button type="submit">Login</button>

          <p>
            You need to create an account?{" "}
            <Link className={s.a} to="/register">
              Register
            </Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
