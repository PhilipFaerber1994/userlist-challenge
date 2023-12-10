import Button from "./Button";
import axios from "axios";
import { API_ENUMS } from "../API_ENUMS";
import { validationSchema } from "../validationSchema";
import { useFormik } from "formik";

const UserForm = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        firstname: "",
        lastname: "",
        age: 0,
        eMail: "",
      },
      validationSchema: validationSchema,
      onSubmit: () => createUser(),
    });

  const createUser = async () => {
    try {
      await axios.post(API_ENUMS.BASE_URL + "/user/", values).then((res) => {
        console.log("Nutzer angelegt: ", values);
      });
    } catch (error) {
      throw error;
    }
  };

  return (
    <div className="flex flex-col">
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <div className="flex flex-col mb-5">
          <label className="text-left text-emerald-500" htmlFor="firstname">
            Vorname
          </label>
          <input
            className="bg-gray-300 p-2 rounded"
            id="firstname"
            type="text"
            value={values.firstname}
            name="firstname"
            onChange={handleChange}
          />
          {errors.firstname && touched.firstname && (
            <p className="text-red-500">{errors.firstname}</p>
          )}
        </div>
        <div className="flex flex-col mb-5">
          <label className="text-left text-emerald-500" htmlFor="lastname">
            Nachname
          </label>
          <input
            className="bg-gray-300 p-2 rounded"
            type="text"
            value={values.lastname}
            name="lastname"
            onChange={handleChange}
          />
          {errors.lastname && touched.lastname && (
            <p className="text-red-500">{errors.lastname}</p>
          )}
        </div>
        <div className="flex flex-col mb-5">
          <label className="text-left text-emerald-500" htmlFor="firstname">
            Alter
          </label>
          <input
            className="bg-gray-300 p-2 rounded"
            type="text"
            value={values.age}
            name="age"
            onChange={handleChange}
          />
          {errors.age && touched.age && (
            <p className="text-red-500">{errors.age}</p>
          )}
        </div>
        <div className="flex flex-col mb-5">
          <label className="text-left text-emerald-500" htmlFor="firstname">
            E-Mail
          </label>
          <input
            className="bg-gray-300 p-2 rounded "
            type="text"
            value={values.eMail}
            name="eMail"
            onChange={handleChange}
          />
          {errors.eMail && touched.eMail && (
            <p className="text-red-500">{errors.eMail}</p>
          )}
        </div>

        <Button
          color="bg-emerald-500"
          hoverColor="bg-emerald-600"
          title="speichern"
        />
      </form>
    </div>
  );
};

export default UserForm;
