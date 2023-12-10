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
  const [mailExists, setMailsExists] = useState<boolean>(false);
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
        })
        .catch((err) => {
          setMailsExists(true);
        });
    } catch (error) {
      throw error;
    }
  };

  return (
    <>
      <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center">
        <div className="flex flex-col items-center bg-white p-8 rounded shadow-md w-1/3 h-1/3">
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
                  icon={
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
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  }
                  clickFunction={() => setConfirmDelete(true)}
                />
                <Button
                  color="bg-amber-500"
                  hoverColor="bg-amber-600"
                  title="bearbeiten"
                  icon={
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
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                      />
                    </svg>
                  }
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
              <div>
                {mailExists && (
                  <p className="text-red-500">E-Mail existiert bereits</p>
                )}
                <div>
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
                </div>
              </div>
            )}

            {/* Visible when user is supossed to be deleted */}
            {confirmDelete && !userIsDeleted && (
              <>
                <Button
                  color="bg-red-500"
                  hoverColor="bg-red-600"
                  title="löschen"
                  icon={
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
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  }
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
