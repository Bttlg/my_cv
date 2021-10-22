import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./Header.css";

import zurag from "./zurag.jpg";

const Header = () => {
  return (
    <div className="container">
      <img src={zurag} alt="myZurag" className="zurag" />

      <div className="about">
        <p className="schoolName">
          МУИС-ХШУИС-Мэдээллийн технологи - III түвшин
        </p>
        <h1>
          BATJARGAL <br /> BATTULGA
        </h1>
      </div>
    </div>
  );
};

export default Header;
