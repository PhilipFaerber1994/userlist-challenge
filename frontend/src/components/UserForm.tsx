import Button from "./Button";
import axios from "axios";
import { API_ENUMS } from "../API_ENUMS";
import { validationSchema } from "../validationSchema";
import { useFormik } from "formik";
import { useState } from "react";

const UserForm = () => {
  const [userCreated, setUserCreated] = useState<boolean>(false);
  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
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
        setUserCreated(true);
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
          title={`${userCreated ? "Nutzer gespeichert" : "speichern"}`}
          icon={
            userCreated ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 17.25v-.228a4.5 4.5 0 00-.12-1.03l-2.268-9.64a3.375 3.375 0 00-3.285-2.602H7.923a3.375 3.375 0 00-3.285 2.602l-2.268 9.64a4.5 4.5 0 00-.12 1.03v.228m19.5 0a3 3 0 01-3 3H5.25a3 3 0 01-3-3m19.5 0a3 3 0 00-3-3H5.25a3 3 0 00-3 3m16.5 0h.008v.008h-.008v-.008zm-3 0h.008v.008h-.008v-.008z"
                />
              </svg>
            )
          }
        />
      </form>
    </div>
  );
};

export default UserForm;
