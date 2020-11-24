import React from 'react';
import CharacterCard from "./CharacterCard";
import Filters from "./Filters";
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
        <div> 
          <Filters handleFilter={this.props.handleFilter}/>
        </div>
        <div>
          <ul className="characterList">{characters}</ul>
        </div>
      </>
    );
  }
}
export default CharacterList;