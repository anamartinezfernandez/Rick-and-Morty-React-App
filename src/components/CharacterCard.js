import React from 'react';
import PropTypes from "prop-types";
import {Link} from "react-router-dom";


class CharacterCard extends React.Component {
  constructor(props){
  super(props);
    console.log(props);
  }
  render() {

    return (
      <article className="character__card">
        <Link 
          to = {`/character-detail/${this.props.character.id}`}
          className= "character__card--link" 
          title= "Ver el detalle del personaje">
          <div className="character__card--image-container">
            <img className="character__card--image" 
              src={this.props.character.photo} 
              alt={this.props.character.name} 
              title={this.props.character.name}/>
          </div>
          <h1 className="character__card--name">{this.props.character.name}</h1>
          <h2 className="character__card--species">{this.props.character.species}</h2>
          <h2 className="character__card--type">{this.props.character.type}</h2>
        </Link>
      </article>
    );
  }
}

CharacterCard.propTypes = {
  character: PropTypes.object,
}
export default CharacterCard;