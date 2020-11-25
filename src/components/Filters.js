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
    this.props.handleFilter(data);
  }

  handleFormSubmit(ev){
    ev.preventDefault();
  }

  render() {
    return (
      <form className="form" role="search" onSubmit={this.handleFormSubmit}>
        <label className="form__label" htmlFor="textInput">Find your favourite character: </label>
        <input className="form__input"  type="text" id="textInput" name="text" placeholder="ej: Beth" value={this.props.nameFilter} onChange={this.handleFilter}/>
      </form>
    );
  }
}

Filters.propTypes = {
  nameFilter: PropTypes.string.isRequired,
  handleFilter: PropTypes.func.isRequired,
};

export default Filters;