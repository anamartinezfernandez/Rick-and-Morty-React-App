import React from 'react';

class CharacterDetail extends React.Component {
  constructor(props){
    super(props);
      console.log (this.props.data);
  }
  
  render() {
    const{name} = this.props.data;

  return (
    <>
     <h1>{name}</h1>
    {/*   <div >
        <img src={this.props.data.photo} alt={this.props.data.name}/>
      </div>
      <h1>{this.name}</h1>
      <p>{this.props.data.species}</p>
      <p>{this.props.data.name}</p> */}
     {/*  seguiri usando props */}
      
    </>
  )};
}


/* usar defaults props */
export default CharacterDetail;