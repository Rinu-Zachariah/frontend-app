import React from "react";
import logo from "../../assets/logo-2.svg";


const Header = () => {
  return (
    <header className="header" id="page-header">
      <div className="header__home">
        <img className="header__logo" src={logo} alt="media-logo" />
        <span>Equinox</span>
      </div>
    </header>
  );
};

export default Header;
