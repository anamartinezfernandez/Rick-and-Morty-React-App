import React from 'react';
import "../stylesheet/characterCard.scss";
import {Link} from "react-router-dom";


class CharacterCard extends React.Component {
  constructor(props){
  super(props);
    console.log(props);
  }
  render() {

    return (
      <div className="characterCard">
        <Link to = {`/character-detail/${this.props.character.id}`}
          className= "card_btn" 
          title= "Ver el detalle del personaje">
          <div className="characterCard__image--container">
            <img className="characterCard__image" src={this.props.character.photo} alt={this.props.character.name}/>
          </div>
          <h1 className="characterCard__name">{this.props.character.name}</h1>
          <h2 className="characterCard__species">{this.props.character.species}</h2>
        </Link>
      </div>
    );
  }
}
export default CharacterCard;