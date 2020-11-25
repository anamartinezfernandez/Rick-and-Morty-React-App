import React from 'react';
import PropTypes from "prop-types";

class Filters extends React.Component {
  constructor(props){
    super(props);
      console.log(props);
    this.handleFilter = this.handleFilter.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFilter(ev){
    const newValue = ev.target.value;
    const data = {
      value: newValue,
    }
    console.log("me están llamando desde Filters", data);
    this.props.handleFilter(data);
  }

  handleFormSubmit(ev){
    ev.preventDefault();
  }

  render() {
    return (
      <form className="" onSubmit={this.handleFormSubmit}>
        <label className="" htmlFor="name">Find your favourite character: </label>
        <input className=""  type="text" id="name" placeholder="ej: Beth" value={this.props.nameFilter} onChange={this.handleFilter}/>
      </form>
    );
  }
}

Filters.propTypes = {
  nameFilter: PropTypes.string.isRequired,
  handleFilter: PropTypes.func.isRequired,
};

export default Filters;