import UserForm from "../components/UserForm";
import Navbar from "../components/Navbar";

export const CreateUserPage = () => {
  return (
    <div>
      <Navbar index={1} />
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-2xl mt-10 mb-10 font-bold text-emerald-500">
          Benutzer anlegen
        </h1>
        <UserForm />
      </div>
    </div>
  );
};
