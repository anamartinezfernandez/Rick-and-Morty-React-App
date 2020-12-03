import React from 'react';
import logo_not_found from "../images/logo_not_found.png"
import PropTypes from "prop-types";


class CharacterNotFound extends React.Component {
  render() {
    return (
      <>
        <p className="character__search--error">
        There isn't any character that matches the text {this.props.nameFilter}.
        </p>
        <img 
            className = "character__search--error-image"
            src={logo_not_found} 
            title="Logo de Rick & Morty" 
            alt="Rick & Morty logo"
            />
      </>
    );
  }
}
CharacterNotFound.propTypes = {
  nameFilter: PropTypes.string
}
export default CharacterNotFound;