import React, { useEffect, useState } from "react";
import UserTable from "../components/UserTable";
import Modal from "../components/Modal";
import { IUser } from "../UserInterface";
import axios from "axios";
import { API_ENUMS } from "../API_ENUMS";

const UserListPage = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [userList, setUserList] = useState<IUser[]>([]);
  const [selectedUser, setSelectedUser] = useState<IUser | {}>({});

  useEffect(() => {
    const getAllUser = async () => {
      await axios
        .get(API_ENUMS.BASE_URL + "/user")
        .then((res) => {
          setUserList(res.data);
        })
        .catch((err) => console.log(err));
    };

    getAllUser();
  }, []);

  const handleTableClick = (user: IUser) => {
    setSelectedUser(user);
    setModalOpen(true);
  };

  const updateUserInList = (updatedUser: IUser) => {
    const updatedIndex = userList.findIndex(
      (user) => user._id === updatedUser._id
    );

    const updatedList = [...userList];
    updatedList[updatedIndex] = updatedUser;

    setUserList(updatedList);
    setModalOpen(false);
  };

  const removeUserFromList = (userId: string) => {
    // Remove the user with the specified userId from the userList state
    setUserList((prevUserList) =>
      prevUserList.filter((user) => user._id !== userId)
    );
  };

  const closeModal = () => setModalOpen(false);

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-2xl mt-10 mb-10 font-bold text-emerald-500">
        Übersicht Benutzer
      </h1>
      <UserTable userList={userList} handleTableClick={handleTableClick} />
      {modalOpen && (
        <Modal
          user={selectedUser as IUser}
          closeModal={closeModal}
          updateUserInList={updateUserInList}
          removeUserFromList={removeUserFromList}
        />
      )}
    </div>
  );
};

export default UserListPage;
