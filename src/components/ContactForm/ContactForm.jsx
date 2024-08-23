import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import style from "./ContactForm.module.css";

const ContactForm = () => {
  const dispatch = useDispatch();

  const initialValues = { name: "", number: "" };

  const validationSchema = Yup.object({
    name: Yup.string().min(3).max(50).required(),
    number: Yup.string().min(3).max(50).required(),
  });

  const handleSubmit = (values, { resetForm }) => {
    dispatch(addContact(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={style.formContainer}>
        <div className={style.formName}>
          <label htmlFor="name" className={style.label}>
            Name
          </label>
          <Field name="name" type="text" className={style.inputField} />
        </div>
        <ErrorMessage
          name="name"
          component="div"
          className={style.errorMessage}
        />
        <div className={style.formField}>
          <label htmlFor="number" className={style.label}>
            Number
          </label>
          <Field name="number" type="text" className={style.inputField} />
        </div>
        <ErrorMessage
          name="number"
          component="div"
          className={style.errorMessage}
        />
        <button type="submit" className={style.buttonSubmit}>
          Add Contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
