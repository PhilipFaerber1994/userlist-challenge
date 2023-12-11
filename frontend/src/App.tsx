import { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserListPage from "./pages/UserListPage";
import { CreateUserPage } from "./pages/CreateUserPage";

function App() {
  useEffect(() => {}, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserListPage />} />
          <Route path="/create-user" element={<CreateUserPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
