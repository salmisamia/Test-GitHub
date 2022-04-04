import React from "react";
import "./Header.css";

//FIXME: Refacto this  remove props if don't need

const Header = (props) => (
  <button className="toggle-button" onClick={props.click}>
    <div className="toggle-button__line" />
    <div className="toggle-button__line" />
    <div className="toggle-button__line" />
  </button>
);

export default Header;
