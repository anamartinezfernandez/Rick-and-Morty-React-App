import React from 'react';
import PropTypes from "prop-types";
import CharacterCard from "./CharacterCard";
import CharacterNotFound from "./CharacterNotFound";
import "../stylesheet/characterList.scss";

const CharacterList = (props) => {

  const characters = props.charactersData.map((character) => {
    /* console.log(character) */;
    return(
      <li key={character.id} className= "characterList__item">
        <CharacterCard character={character}/>
      </li>
    )
  });

  const characterNotFound =
    props.charactersData.length === 0 ? (
      <CharacterNotFound nameFilter= {props.nameFilter} />
    ) : (
      ""
    );

  return (
    <section className="character__results">
      {characterNotFound}
      <ul className="characterList">{characters}</ul>
    </section>
  );
};

CharacterList.propTypes = {
  charactersData: PropTypes.arrayOf(PropTypes.object),
  nameFilter: PropTypes.string
}
export default CharacterList;