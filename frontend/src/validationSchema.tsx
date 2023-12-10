import * as yup from "yup";

export const validationSchema = yup.object().shape({
  firstname: yup.string().required("Bitte Vorname eingeben"),
  lastname: yup.string().required("Bitte Nachname eingeben"),
  age: yup.number().required("Bitte Alter eingeben"),
  eMail: yup
    .string()
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
      "Ungültige E-Mail"
    )
    .required("Bitte E-Mail eingeben"),
});
