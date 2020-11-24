import React from "react";
import "../stylesheet/index.scss";
import "../stylesheet/app.scss";
import getData from "../services/getData";

import Header from "./Header";
import Footer from "./Footer";

import CharacterList from "./CharacterList";



class App extends React.Component {
  constructor(props){
    super(props);
    console.log(this.props);
      this.state = {
        charactersData: [],
        nameFilter: ""
      };
    this.handleFilter = this.handleFilter.bind(this);
  } 


  componentDidMount(){
    getData.getDataFromApi().then((cleanData => {
      console.log(cleanData);
      this.setState({
        charactersData: cleanData
      });
      
    })
  )}

  handleFilter(data){
    console.log("app me están llamando filter", data.value);
    const {value} = data; //destructuring
    this.setState({
      nameFilter: value,
    })
    this.filteredCharacters();
  }

  filteredCharacters(){
    const charactersData = this.state.charactersData;
    const nameFilter = this.state.nameFilter;

    console.log(nameFilter);
    console.log(charactersData);
    
    const filteredData = charactersData.filter((characterData) =>  characterData.name.toUpperCase().includes(nameFilter.toUpperCase()))
    this.setState({
      charactersData: filteredData,
    })
  }

 

  render() {
    
    console.log(this.state);
    return (
      <div className="page">
        <Header  />
        <main>
          <CharacterList charactersData={this.state.charactersData} handleFilter={this.handleFilter}/>
        </main>
        <Footer />
      </div>
    );
  }
}
export default App;