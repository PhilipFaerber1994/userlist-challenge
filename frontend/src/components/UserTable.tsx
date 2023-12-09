import { useEffect, useState } from "react";
import { User } from "../UserInterface";
import axios from "axios";
import { API_ENUMS } from "../API_ENUMS";

const UserTable = () => {
  const tableHeader = ["Vorname", "Nachname", "Alter", "E-Mail"];
  const [userList, setUserList] = useState<User[]>([]);

  useEffect(() => {
    const getAllUser = async () => {
      await axios
        .get(API_ENUMS.BASE_URL + "user")
        .then((res) => {
          setUserList(res.data);
          console.log(res.data);
        })
        .catch((err) => console.log(err));
    };

    getAllUser();
  }, []);

  return (
    <table className="border-2 border-emerald-500">
      <thead className="bg-emerald-500">
        <tr>
          {tableHeader.map((header, index) => (
            <th key={index} className="p-5 text-left text-white">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {userList.map((user, index) => (
          <tr
            key={index}
            className={`${
              index % 2 === 0 && "bg-gray-200"
            } hover:bg-emerald-200 hover:border-2 hover:border-emerald-500 hover:cursor-pointer`}
          >
            <td className="p-5 text-left">{user.firstname}</td>
            <td className="p-5 text-left">{user.lastname}</td>
            <td className="p-5 text-left">{String(user.age)}</td>
            <td className="p-5 text-left">{user.eMail}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
