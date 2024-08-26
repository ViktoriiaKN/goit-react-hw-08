import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { register } from "../../redux/auth/operations";
import style from "./RegistrationPage.module.css";

const RegistrationPage = () => {
  const dispatch = useDispatch();

  const initialValues = { email: "", password: "", confirmPassword: "" };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string().min(6, "Password too short").required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Required"),
  });

  const handleSubmit = (values) => {
    const { password, confirmPassword, ...credentials } = values;

    if (password !== confirmPassword) {
      console.error("Passwords do not match");
      return;
    }

    dispatch(register(credentials));
  };
  return (
    <div className={style.registrationContainer}>
      <h1>Register</h1>
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
          <div className={style.formField}>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <Field
              name="confirmPassword"
              type="password"
              className={style.inputField}
            />
            <ErrorMessage
              name="confirmPassword"
              component="div"
              className={style.errorMessage}
            />
          </div>
          <button type="submit" className={style.submitButton}>
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationPage;
