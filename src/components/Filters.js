import React from 'react';


class Filters extends React.Component {
  constructor(props){
    super(props);
      console.log(props);
    this.handleFilter = this.handleFilter.bind(this);
  }

  handleFilter(ev){
    const newValue = ev.target.value;
    const data = {
      value: newValue,
    }
    console.log("me están llamando desde Filters", data);
    this.props.handleFilter(data);
  }
  render() {
    return (
      <form className="">
        <label className="" htmlFor="name">Find your favourite character: </label>
        <input className=""  type="text" id="name"  onChange={this.handleFilter}/>
      </form>
    );
  }
}
export default Filters;