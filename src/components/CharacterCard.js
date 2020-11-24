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
      <>
        <div className="characterItem__image--container">
          <img className="characterItem__image" src={this.props.character.photo} alt={this.props.character.name}/>
        </div>
        <h1 className="characterItem__name">{this.props.character.name}</h1>
        <Link to = {`/character-detail/${this.props.character.id}`}
          className= "card_btn" 
          title= "Ver el detalle del personaje">
            Ver detalle del personaje
        </Link>
        <h2 className="characterItem__species">{this.props.character.species}</h2>
      </>
    );
  }
}
export default CharacterCard;