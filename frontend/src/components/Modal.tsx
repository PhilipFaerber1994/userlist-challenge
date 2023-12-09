import React, { useEffect, useState } from "react";
import { IUser } from "../UserInterface";
import Button from "./Button";
import axios from "axios";
import { API_ENUMS } from "../API_ENUMS";

interface IModal {
  user: IUser;
  closeModal: () => void;
}

const Modal = ({ user, closeModal }: IModal) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editUser, setEditUser] = useState<IUser>({
    _id: user._id,
    firstname: user.firstname,
    lastname: user.lastname,
    age: user.age,
    eMail: user.eMail,
  });

  useEffect(() => {
    console.log(user);
  }, []);

  const changeToEditMode = () => {
    setEdit(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditUser((prevObject) => ({
      ...prevObject,
      [name]: value,
    }));
  };

  const updateUser = async (id: string) => {
    try {
      await axios
        .put(API_ENUMS.BASE_URL + `/user/${id}`, editUser)
        .then((res) => {
          console.log(res);
        });
    } catch (error) {
      throw error;
    }
  };

  return (
    <>
      <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center">
        <div className="flex flex-col items-center bg-white p-8 rounded shadow-md w-1/2 h-1/4">
          {edit ? (
            <table>
              <tbody>
                <tr>
                  <td className="text-left pr-5">
                    <input
                      className="bg-gray-300 p-2 rounded"
                      type="text"
                      value={`${editUser.firstname}`}
                      name="firstname"
                      onChange={(e) => handleInputChange(e)}
                    />
                  </td>
                  <td className="text-left pr-5">
                    <input
                      className="bg-gray-300 p-2 rounded"
                      type="text"
                      value={`${editUser.lastname}`}
                      name="lastname"
                      onChange={(e) => handleInputChange(e)}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="text-left pr-5">
                    <input
                      className="bg-gray-300 p-2 rounded"
                      type="text"
                      value={`${editUser.age}`}
                      name="age"
                      onChange={(e) => handleInputChange(e)}
                    />
                  </td>
                  <td className="text-left pr-5">
                    <input
                      className="bg-gray-300 p-2 rounded"
                      type="text"
                      value={`${editUser.eMail}`}
                      name="eMail"
                      onChange={(e) => handleInputChange(e)}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          ) : (
            <table>
              <tbody>
                <tr>
                  <td className="text-left pr-5">{user.firstname}</td>
                  <td className="text-left pr-5">{user.lastname}</td>
                </tr>
                <tr>
                  <td className="text-left pr-5">{String(user.age)}</td>
                  <td className="text-left pr-5">{user.eMail}</td>
                </tr>
              </tbody>
            </table>
          )}
          <div className="flex justify-around mt-auto">
            <Button
              color="bg-red-500"
              hoverColor="bg-red-600"
              title="löschen"
              clickFunction={() => closeModal()}
            />
            <Button
              color="bg-amber-500"
              hoverColor="bg-amber-600"
              title="bearbeiten"
              clickFunction={() => changeToEditMode()}
            />
            <div className="flex justify-around mt-auto">
              <Button
                color="bg-gray-500"
                hoverColor="bg-gray-600"
                title="schließen"
                clickFunction={() => closeModal()}
              />
              <Button
                color="bg-emerald-500"
                hoverColor="bg-emerald-600"
                title="speichern"
                clickFunction={() => updateUser(user._id)}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
