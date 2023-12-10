import React, { useState } from "react";
import { IUser } from "../UserInterface";
import Button from "./Button";
import axios from "axios";
import { API_ENUMS } from "../API_ENUMS";
import { validationSchema } from "../validationSchema";

const UserForm = () => {
  const [editUser, setEditUser] = useState<IUser>({
    _id: "",
    firstname: "",
    lastname: "",
    age: 0,
    eMail: "",
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
      const { _id, ...userData } = editUser;
      await axios.post(API_ENUMS.BASE_URL + "/user/", userData).then((res) => {
        console.log("Nutzer angelegt: ", editUser);
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
      <input
        className="bg-gray-300 p-2 rounded mb-5"
        id="firstname"
        type="text"
        value={`${editUser.firstname}`}
        name="firstname"
        onChange={(e) => handleInputChange(e)}
      />
      <label className="text-left text-emerald-500" htmlFor="lastname">
        Nachname
      </label>
      <input
        className="bg-gray-300 p-2 rounded mb-5"
        type="text"
        value={`${editUser.lastname}`}
        name="lastname"
        onChange={(e) => handleInputChange(e)}
      />
      <label className="text-left text-emerald-500" htmlFor="firstname">
        Alter
      </label>
      <input
        className="bg-gray-300 p-2 rounded mb-5"
        type="text"
        value={`${editUser.age}`}
        name="age"
        onChange={(e) => handleInputChange(e)}
      />
      <label className="text-left text-emerald-500" htmlFor="firstname">
        E-Mail
      </label>
      <input
        className="bg-gray-300 p-2 rounded mb-5"
        type="text"
        value={`${editUser.eMail}`}
        name="eMail"
        onChange={(e) => handleInputChange(e)}
      />

      <Button
        color="bg-emerald-500"
        hoverColor="bg-emerald-600"
        title="speichern"
        clickFunction={() => createUser()}
      />
    </div>
  );
};

export default UserForm;
