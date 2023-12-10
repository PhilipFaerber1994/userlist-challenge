import React, { useState } from "react";
import { IUser } from "../UserInterface";
import Button from "./Button";
import axios from "axios";
import { API_ENUMS } from "../API_ENUMS";
import { validationSchema } from "../validationSchema";
import { useFormik } from "formik";

const UserForm = () => {
  const [editUser, setEditUser] = useState<IUser>({
    _id: "",
    firstname: "",
    lastname: "",
    age: 0,
    eMail: "",
  });
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        // _id: "",
        firstname: "",
        lastname: "",
        age: 0,
        eMail: "",
      },
      validationSchema: validationSchema,
      onSubmit: () => createUser(),
    });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditUser((prevObject) => ({
      ...prevObject,
      [name]: value,
    }));
  };

  const createUser = async () => {
    try {
      //   const { _id, ...values } = editUser;
      await axios.post(API_ENUMS.BASE_URL + "/user/", values).then((res) => {
        console.log("Nutzer angelegt: ", values);
      });
    } catch (error) {
      throw error;
    }
  };

  return (
    <div className="flex flex-col">
      <label className="text-left text-emerald-500" htmlFor="firstname">
        Vorname
      </label>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <input
          className="bg-gray-300 p-2 rounded mb-5"
          id="firstname"
          type="text"
          value={values.firstname}
          name="firstname"
          onChange={handleChange}
        />
        <label className="text-left text-emerald-500" htmlFor="lastname">
          Nachname
        </label>
        <input
          className="bg-gray-300 p-2 rounded mb-5"
          type="text"
          value={values.lastname}
          name="lastname"
          onChange={handleChange}
        />
        <label className="text-left text-emerald-500" htmlFor="firstname">
          Alter
        </label>
        <input
          className="bg-gray-300 p-2 rounded mb-5"
          type="text"
          value={values.age}
          name="age"
          onChange={handleChange}
        />
        <label className="text-left text-emerald-500" htmlFor="firstname">
          E-Mail
        </label>
        <input
          className="bg-gray-300 p-2 rounded mb-5"
          type="text"
          value={values.eMail}
          name="eMail"
          onChange={handleChange}
        />

        <Button
          color="bg-emerald-500"
          hoverColor="bg-emerald-600"
          title="speichern"
          clickFunction={handleSubmit}
        />
      </form>
    </div>
  );
};

export default UserForm;
