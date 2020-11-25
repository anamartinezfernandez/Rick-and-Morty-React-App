import React from 'react';
import logo_header from "../images/logo_header.png"
import {Link} from "react-router-dom";
import "../stylesheet/header.scss";

class Header extends React.Component {
  render() {
    return (
      <>
        <Link to = "/">
          <img src={logo_header} rel="" alt=""/>
        </Link>
      </>
    );
  }
}
export default Header;