import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <h1 className="navbar-header">THEME REDUX</h1>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </>
  );
};

export default Navbar;
