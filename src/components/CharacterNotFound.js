import React from 'react';
import PropTypes from "prop-types";


class CharacterNotFound extends React.Component {
  render() {
    return (
      <>
        <p className="character__search--error">
        There isn't any character that matches the text {this.props.nameFilter}.
        </p>
      </>
    );
  }
}
CharacterNotFound.propTypes = {
  nameFilter: PropTypes.string
}
export default CharacterNotFound;