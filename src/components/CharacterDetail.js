import React from 'react';
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const CharacterDetail = (props) => {

  const {photo, name, species, episodes, status, origin} = props.data;
  

  const renderIconStatus = () => {
    if (`${status} === "Alive"`) {
      return <i className="card__details--icon fas fa-heartbeat"></i>;
    } else if (`${status} === "Dead"`) {
      return <i className="card__details--icon fas fa-skull-crossbones"></i>;
    } else if (`${status} === "unknown"`) {
      return <i className="card__details--icon fas fa-question"></i>;
    }
  };

  const renderIconSpecies = () => {
    if (`${species} === "Human"`) {
      return <i className="card__details--icon fas fa-female"></i>;
    } else if (`${species} === "Alien"`) {
      return <i className="card__details--icon fab fa-reddit-alien"></i>;
    } else if (`${species} === "unknown"`) {
      return <i className="card__details--icon fas fa-question"></i>;
    }
  };

  return (
    <section className="detailCard">
      <article className="detailCard__details">
        <div >
          <img className="detailCard__details--photo"src={photo} alt={name}/>
        </div>
        <div className="detailCard__details--wrapper">
          <h1 className="detailCard__details--name">{name}</h1>
          <ul className="detailCard__details--list">
            <li className="detailCard__details--item">
              <span className="detailCard__details--item-info">Status: </span>{status} {renderIconStatus()}</li>
            <li className="detailCard__details--item">
              <span className="detailCard__details--item-info">Species: </span>{species} {renderIconSpecies()}</li>
            <li className="detailCard__details--item">
              <span className="detailCard__details--item-info">Episodes: </span> {episodes} </li> 
            <li className="detailCard__details--item">
              <span className="detailCard__details--item-info">Origin: </span> {origin} </li>   
          </ul>
          <Link 
          to = "/"
          className="detailCard__details--link"
          title= "Volver a pantalla principal">
            Back
        </Link>
        </div>
      </article>
    </section>
  );
}

CharacterDetail.propTypes = {
  data: PropTypes.object
}
export default CharacterDetail;