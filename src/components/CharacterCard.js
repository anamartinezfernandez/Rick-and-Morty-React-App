import React from 'react';


class CharacterCard extends React.Component {
  constructor(props){
  super(props);
    console.log(props);
  }
  render() {

    return (
      <>
        <img src={this.props.character.photo} rel="" alt=""/>
        <h1>{this.props.character.name}</h1>
        <h2>{this.props.character.species}</h2>
      </>
    );
  }
}
export default CharacterCard;