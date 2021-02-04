import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ id }) => {
  const [active, setActive] = useState("360");

  return (
    <div className="nav-bar">
      <div className="tabs">
        <ul className="nav">
          <li className={active === "360" ? "active" : ""}>
            <Link to="/" onClick={() => setActive("360")}>
              360 View
            </Link>
          </li>
          <li className={active === "contacts" ? "active" : ""}>
            <Link to="/contacts" onClick={() => setActive("contacts")}>
              Contacts
            </Link>
          </li>
          <li className={active === "serviceorders" ? "active" : ""}>
            <Link
              to="/serviceorders"
              onClick={() => setActive("serviceorders")}
            >
              Service Orders
            </Link>
          </li>
          <li className={active === "accountinfo" ? "active" : ""}>
            <Link to="/accountinfo" onClick={() => setActive("accountinfo")}>
              Account Info
            </Link>
          </li>
        </ul>
      </div>
      <hr className="x-line" />
    </div>
  );
};

export default Navbar;
