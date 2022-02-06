import React from "react";
import Search from "./Search";

import "../styles/Header.css";

const Header = ({searchCity}) => {
  return (
    <header className="Header">
      <h1 className="Haeder_title">Weather</h1>
      <Search searchCity={searchCity} />
    </header>
  );
};

export default Header;
