import React from 'react';
import PropTypes from "prop-types";
import CharacterCard from "./CharacterCard";
import "../stylesheet/characterList.scss";


class CharacterList extends React.Component {
  constructor(props){
  super(props);
    console.log(props);
  }
  render() {
    const characters = this.props.charactersData.map((character) => {
      /* console.log(character) */;
      return(
        <li key={character.id} className= "characterList__item">
          <CharacterCard character={character}/>
        </li>
      )
    })
    return (
      <>
        <ul className="characterList">{characters}</ul>
      </>
    );
  }
}
CharacterList.propTypes = {
  charactersData: PropTypes.arrayOf(PropTypes.object)
}
export default CharacterList;