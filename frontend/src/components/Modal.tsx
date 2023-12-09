import React, { useState } from "react";
import { IUser } from "../UserInterface";
import Button from "./Button";

interface IModal {
  user: IUser;
  closeModal: () => void;
}

const Modal = ({ user, closeModal }: IModal) => {
  const [edit, setEdit] = useState<boolean>(false);

  const changeToEditMode = () => {
    setEdit(true);
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
                      value={`${user.firstname}`}
                    />
                  </td>
                  <td className="text-left pr-5">
                    <input
                      className="bg-gray-300 p-2 rounded"
                      type="text"
                      value={`${user.lastname}`}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="text-left pr-5">
                    <input
                      className="bg-gray-300 p-2 rounded"
                      type="text"
                      value={`${user.age.toString()}`}
                    />
                  </td>
                  <td className="text-left pr-5">
                    <input
                      className="bg-gray-300 p-2 rounded"
                      type="text"
                      value={`${user.eMail}`}
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
