import React from 'react';
import {Link} from "react-router-dom";

class CharacterDetail extends React.Component {
  constructor(props){
    super(props);
      console.log (this.props.data);
  }
  
  render() {
    const {photo, name, species, episodes, status, origin} = this.props.data;

  return (
    <>
      <div >
        <img src={photo} alt={name}/>
      </div>
      <div>
        <h1>{name}</h1>
        <p>Status: {status}</p>
        <p>Species: {species}</p>
        <p>Episodes: {episodes} </p> 
        <p>Origin: {origin}</p>   
      </div>
      <Link to = "/"
          className=""
          title= "Volver a pantalla principal">
            Back
        </Link>
    </>
  )};
}


/* usar defaults props */
export default CharacterDetail;