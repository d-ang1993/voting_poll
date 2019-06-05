import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>
        <a>Poll</a>
      </h1>
      <ul>
        <li>
          <Link to="/register"> Register </Link>
        </li>
        <li>
          <Link to="/login"> Login </Link>
        </li>
        <li>
          <Link to="/"> Home </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
