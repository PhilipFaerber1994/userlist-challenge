import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserListPage from "./pages/UserListPage";
import { CreateUserPage } from "./pages/CreateUserPage";

function App() {
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
