import React, { Component } from "react";

//Stateless functional component and Argument destructuring
const NavBar = ({ totalNumber }) => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar{" "}
          <span className="badge badge-pill badge-secondary">
            {totalNumber}
          </span>
        </a>
      </nav>
    </div>
  );
};

export default NavBar;
