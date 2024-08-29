import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import s from "./ContactForm.module.css";

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
      <Form className={s.formContainer}>
        <div className={s.formName}>
          <label htmlFor="name" className={s.label}>
            Name
          </label>
          <Field name="name" type="text" className={s.inputField} />
        </div>
        <ErrorMessage name="name" component="div" className={s.errorMessage} />
        <div className={s.formField}>
          <label htmlFor="number" className={s.label}>
            Number
          </label>
          <Field name="number" type="text" className={s.inputField} />
        </div>
        <ErrorMessage
          name="number"
          component="div"
          className={s.errorMessage}
        />
        <button type="submit" className={s.buttonSubmit}>
          Add Contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
