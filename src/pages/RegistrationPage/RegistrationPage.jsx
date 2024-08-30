import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { register } from "../../redux/auth/operations";
import { NavLink } from "react-router-dom";
import s from "./RegistrationPage.module.css";

const RegistrationPage = () => {
  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string().min(6, "Password too short").required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Required"),
  });

  const handleSubmit = (values, options) => {
    // Видаляємо тільки confirmPassword, залишаючи password
    const { confirmPassword, ...credentials } = values;

    if (credentials.password !== confirmPassword) {
      console.error("Passwords do not match");
      return;
    }

    console.log("Submitting credentials:", credentials); // Перевірка відправлених даних
    dispatch(register(credentials));
    options.resetForm();
  };

  return (
    <div className={s.registrationPage}>
      <h1 className={s.title}>Register</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={s.form}>
          <div className={s.formGroup}>
            <label htmlFor="name" className={s.label}>
              Name
            </label>
            <Field name="name" type="text" className={s.input} />
            <ErrorMessage name="name" component="div" className={s.error} />
          </div>
          <div className={s.formGroup}>
            <label htmlFor="email" className={s.label}>
              Email
            </label>
            <Field name="email" type="email" className={s.input} />
            <ErrorMessage name="email" component="div" className={s.error} />
          </div>
          <div className={s.formGroup}>
            <label htmlFor="password" className={s.label}>
              Password
            </label>
            <Field name="password" type="password" className={s.input} />
            <ErrorMessage name="password" component="div" className={s.error} />
          </div>
          <div className={s.formGroup}>
            <label htmlFor="confirmPassword" className={s.label}>
              Confirm Password
            </label>
            <Field name="confirmPassword" type="password" className={s.input} />
            <ErrorMessage
              name="confirmPassword"
              component="div"
              className={s.error}
            />
          </div>
          <div className={s.btnContainer}>
            <button type="submit" className={s.button}>
              Register
            </button>
          </div>
          <p className={s.linkTo}>
            You already have account?{" "}
            <NavLink className={s.signIn} to="/login">
              Sign in
            </NavLink>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationPage;
