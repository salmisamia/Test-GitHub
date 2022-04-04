import React from "react";
import Header from "./Header";
import "./Navbar.css";

//FIXME: Refacto this  remove props if don't need

const Navbar = (props) => {
  return (
    <div className="toolbar">
      <nav className="toolbar__navigation">
        <div className="toolbar__toggle-button">
          <Header click={props.drawerClickHandler} />
        </div>
        <div className="toolbar__logo">
          <p>Github Dashboard Sample</p>
        </div>
        <div className="spacer" />
      </nav>
    </div>
  );
};
export default Navbar;
