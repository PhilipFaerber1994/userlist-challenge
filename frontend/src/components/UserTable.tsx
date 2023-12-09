import { IUser } from "../UserInterface";
import axios from "axios";

interface IUserTable {
  userList: IUser[];
  handleTableClick: (user: IUser) => void;
}

const UserTable = ({ userList, handleTableClick }: IUserTable) => {
  const tableHeader = ["Vorname", "Nachname", "Alter", "E-Mail"];

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
            onClick={() => handleTableClick(user)}
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
