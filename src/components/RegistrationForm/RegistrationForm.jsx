import { Field, Form, Formik } from "formik";
import { Link, Navigate } from "react-router-dom";
import { register } from "../../redux/auth/operations";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import s from "./RegistrationForm.module.css";

const RegistrationForm = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  const initialvalues = {
    name: "",
    email: "",
    password: "",
  };

  const handleSubmit = (values, options) => {
    dispatch(register(values));
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
            name="name"
            placeholder="Enter your Name"
          />

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
          <button type="submit">Register</button>

          <p>
            You already have account?{" "}
            <Link className={s.a} to="/login">
              Sign In
            </Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
