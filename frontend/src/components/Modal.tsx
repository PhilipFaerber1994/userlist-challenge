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
        <div className="bg-white p-8 rounded shadow-md">
          <p>{user.firstname}</p>
          <Button
            color="bg-red-500"
            hoverColor="bg-red-600"
            title="schließen"
            clickFunction={() => closeModal()}
          />
        </div>
      </div>
    </>
  );
};

export default Modal;
