import React from 'react';
import logo_header from "../images/logo_header.png"
import {Link} from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <header className="header" role="banner">
        <Link to = "/"  
          className= "header__link" 
          title= "Ir a la página principal">
          <img 
            className = "header__image"
            src={logo_header} 
            title="Logo de Rick & Morty" 
            alt="Rick & Morty logo"
            />
        </Link>
      </header>
    );
  }
}
export default Header;