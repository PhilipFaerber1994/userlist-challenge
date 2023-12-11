import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface INavbar {
  index: number;
}

const Navbar = ({ index }: INavbar) => {
  // Retrieve the activeLink value from localStorage or default to 0

  const links = [
    {
      to: "/",
      linkTitle: "Benutzerliste",
    },
    {
      to: "/create-user",
      linkTitle: "Benutzer anlegen",
    },
  ];

  return (
    <nav className="p-10 flex justify-end">
      {links.map((link, i) => (
        <Link key={i} to={link.to}>
          <span
            className={`${
              i === index ? "bg-emerald-500 text-white font-bold rounded" : ""
            } p-4`}
          >
            {link.linkTitle}
          </span>
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
