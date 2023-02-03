import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import Theme from "../features/Theme/Theme";

const Navbar = () => {
  return (
    <>
      <div className="navbar-header">
        <h1>THEME REDUX</h1>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Theme />
      </div>
    </>
  );
};

export default Navbar;
