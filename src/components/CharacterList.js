import React from 'react';
import CharacterCard from "./CharacterCard";


class CharacterList extends React.Component {
  constructor(props){
  super(props);
    console.log(props);
  }
  render() {
    const characters = this.props.charactersData.map((character) => {
      console.log(character);
      return(
        <li key={character.id} className= "">
          <CharacterCard character={character}/>
        </li>
      )
    })
    return (
      <div>
        <ul className="">{characters}</ul>
      </div>
    );
  }
}
export default CharacterList;