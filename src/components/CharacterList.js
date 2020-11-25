import React from 'react';
import PropTypes from "prop-types";
import CharacterCard from "./CharacterCard";
import CharacterNotFound from "./CharacterNotFound";

const CharacterList = (props) => {

  const characters = props.charactersData.map((character) => {
    return(
      <li key={character.id} className= "character__search--list-item">
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
    <section className="character__search">
      {characterNotFound}
      <ul className="character__search--list">{characters}</ul>
    </section>
  );
};

CharacterList.propTypes = {
  charactersData: PropTypes.arrayOf(PropTypes.object),
  nameFilter: PropTypes.string
}
export default CharacterList;