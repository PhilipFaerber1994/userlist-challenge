import React from "react";
import { IUser } from "../UserInterface";
import Button from "./Button";

interface IModal {
  user: IUser;
  closeModal: () => void;
}

const Modal = ({ user, closeModal }: IModal) => {
  return (
    <>
      <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center">
        <div className="flex flex-col items-center bg-white p-8 rounded shadow-md w-1/4 h-1/2">
          {/* I wrapped the four p-tags inside two div-tags to make the edit modus look better */}
          <div className="flex flex-row justify-left w-full">
            <p className="mr-5">{user.firstname}</p>
            <p>{user.lastname}</p>
          </div>
          <div className="flex flex-row justify-left w-full">
            <p className="mr-5">{String(user.age)}</p>
            <p>{user.eMail}</p>
          </div>
          <div className="flex flex-row justify-around mt-auto">
            {/* Use mt-auto to push the button div to the bottom */}
            <div>
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
                clickFunction={() => closeModal()}
              />
            </div>
            <Button
              color="bg-gray-500"
              hoverColor="bg-gray-600"
              title="schließen"
              clickFunction={() => closeModal()}
            />
          </div>
          <div className="flex flex-row justify-around mt-auto"></div>
        </div>
      </div>
    </>
  );
};

export default Modal;
