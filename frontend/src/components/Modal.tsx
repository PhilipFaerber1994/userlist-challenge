import React, { useEffect, useState } from "react";
import { IUser } from "../UserInterface";
import Button from "./Button";
import axios from "axios";
import { API_ENUMS } from "../API_ENUMS";

interface IModal {
  user: IUser;
  closeModal: () => void;
  updateUserInList: (updatedUser: IUser) => void;
  removeUserFromList: (userId: string) => void;
}

const Modal = ({
  user,
  closeModal,
  updateUserInList,
  removeUserFromList,
}: IModal) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [confirmDelete, setConfirmDelete] = useState<boolean>(false);
  const [userIsDeleted, setUserIsDeleted] = useState<boolean>(false);
  const [editUser, setEditUser] = useState<IUser>({
    _id: user._id,
    firstname: user.firstname,
    lastname: user.lastname,
    age: user.age,
    eMail: user.eMail,
  });

  useEffect(() => {
    console.log("edit", edit + " | confirmDelete", confirmDelete);
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

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(API_ENUMS.BASE_URL + `/user/${id}`).then((res) => {
        removeUserFromList(id);
        setUserIsDeleted(true);
        console.log("After deleting");
        console.log("edit", edit + " | userIsDeleted", userIsDeleted);
      });
    } catch (error) {
      throw error;
    }
  };

  const updateUser = async (id: string) => {
    try {
      await axios
        .put(API_ENUMS.BASE_URL + `/user/${id}`, editUser)
        .then((res) => {
          console.log(res);
          updateUserInList(res.data);
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
            <>
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
            </>
          ) : !userIsDeleted ? (
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
          ) : (
            <p>
              {user.firstname} {user.lastname} wurde erfolgreich gelöscht.
            </p>
          )}

          <div className="flex justify-around mt-auto">
            {/* All three actions */}
            {!edit && !confirmDelete && (
              <>
                <Button
                  color="bg-red-500"
                  hoverColor="bg-red-600"
                  title="löschen"
                  clickFunction={() => setConfirmDelete(true)}
                />
                <Button
                  color="bg-amber-500"
                  hoverColor="bg-amber-600"
                  title="bearbeiten"
                  clickFunction={() => changeToEditMode()}
                />
                <Button
                  color="bg-gray-500"
                  hoverColor="bg-gray-600"
                  title="schließen"
                  clickFunction={() => closeModal()}
                />
              </>
            )}

            {/* Visible when user is supossed to be updated */}
            {edit && (
              <>
                <Button
                  color="bg-emerald-500"
                  hoverColor="bg-emerald-600"
                  title="speichern"
                  clickFunction={() => updateUser(user._id)}
                />
                <Button
                  color="bg-gray-500"
                  hoverColor="bg-gray-600"
                  title="abbrechen"
                  clickFunction={() => {
                    setConfirmDelete(false);
                    setEdit(false);
                  }}
                />
              </>
            )}

            {/* Visible when user is supossed to be deleted */}
            {confirmDelete && !userIsDeleted && (
              <>
                <Button
                  color="bg-red-500"
                  hoverColor="bg-red-600"
                  title="wirklich löschen"
                  clickFunction={() => handleDelete(user._id)}
                />
                <Button
                  color="bg-gray-500"
                  hoverColor="bg-gray-600"
                  title="abbrechen"
                  clickFunction={() => {
                    setConfirmDelete(false);
                    setEdit(false);
                  }}
                />
              </>
            )}
            {confirmDelete && userIsDeleted && (
              <Button
                color="bg-gray-500"
                hoverColor="bg-gray-600"
                title="schließen"
                clickFunction={() => closeModal()}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
