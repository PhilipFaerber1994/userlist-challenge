import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState<Number>(0);
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

  const activateLink = (index: Number) => {
    setActiveLink(index);
  };

  return (
    <nav className="p-10 flex justify-end">
      {links.map((link, index) => (
        <Link key={index} to={link.to} onClick={() => activateLink(index)}>
          <span
            className={`${
              activeLink === index
                ? "bg-emerald-500 text-white font-bold rounded"
                : ""
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
