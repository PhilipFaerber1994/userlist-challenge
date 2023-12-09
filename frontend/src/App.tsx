import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import UserListPage from "./pages/UserListPage";
import { CreateUserPage } from "./pages/CreateUserPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<UserListPage />} />
          <Route path="/create-user" element={<CreateUserPage />} />
        </Routes>
        <Outlet />
      </BrowserRouter>
    </div>
  );
}

export default App;
