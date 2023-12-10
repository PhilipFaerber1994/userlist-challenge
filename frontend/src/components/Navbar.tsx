import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  // Retrieve the activeLink value from localStorage or default to 0
  const storedActiveLink = localStorage.getItem("activeLink");
  const [activeLink, setActiveLink] = useState<Number>(
    storedActiveLink ? parseInt(storedActiveLink, 10) : 0
  );

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

    localStorage.setItem("activeLink", index.toString());
  };

  useEffect(() => {
    // With returning the localStorage the position of the active link
    // is on the same position it had bevore refreshing the browser
    return () => {
      localStorage.removeItem("activeLink");
    };
  }, []);

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
