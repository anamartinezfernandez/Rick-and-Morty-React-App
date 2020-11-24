import React from 'react';
import logo_header from "../images/logo_header.png"
import "../stylesheet/header.scss";

class Header extends React.Component {
  render() {
    return (
      <>
        <img src={logo_header} rel="" alt=""/>
      </>
    );
  }
}
export default Header;