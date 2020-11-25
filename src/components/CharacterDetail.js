import React from 'react';
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const CharacterDetail = (props) => {

  const {photo, name, species, episodes, status, origin} = props.data;
  

  const renderIconStatus = () => {
    if (props.data.status === "Alive") {
      return <i className="card__details--icon fas fa-heartbeat"></i>;
    } else if (props.data.status === "Dead") {
      return <i className="card__details--icon fas fa-skull-crossbones"></i>;
    } else if (props.data.status === "unknown") {
      return <i className="card__details--icon fas fa-question"></i>;
    }
  };

  const renderIconSpecies = () => {
    if (props.data.species=== "Human") {
      return <i className="card__details--icon fas fa-female"></i>;
    } else if (props.data.species === "Alien") {
      return <i className="card__details--icon fab fa-reddit-alien"></i>;
    } else if (props.data.species === "unknown") {
      return <i className="card__details--icon fas fa-question"></i>;
    }
  };

  return (
    <section className="card">
      <article>
        <div >
          <img src={photo} alt={name}/>
        </div>
        <div>
          <h1>{name}</h1>
          <p>Status: {renderIconStatus()}{status}</p>
          <p>Species: {renderIconSpecies()}{species}</p>
          <p>Episodes: {episodes} </p> 
          <p>Origin: {origin}</p>   
        </div>
        <Link 
          to = "/"
          className=""
          title= "Volver a pantalla principal">
            Back
        </Link>
      </article>
    </section>
  );
}

CharacterDetail.propTypes = {
  data: PropTypes.object
}
export default CharacterDetail;