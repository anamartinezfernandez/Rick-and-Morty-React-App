import React from "react";
import "../stylesheet/app.scss";

import getData from "../services/getData";
import Header from "./Header";
import Filters from "./Filters";
import Footer from "./Footer";
import CharacterList from "./CharacterList";
import CharacterDetail from "./CharacterDetail";
import { Route, Switch } from "react-router-dom";



class App extends React.Component {
  constructor(props){
    super(props);
      this.state = {
        charactersData: [],
        nameFilter: ""
      };
    this.handleFilter = this.handleFilter.bind(this);
    this.renderCharacterDetail = this.renderCharacterDetail.bind(this);
  } 


  componentDidMount(){
    getData.getDataFromApi().then((cleanData => {
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
  }

  filteredCharacters(){
    const charactersData = this.state.charactersData;
    const nameFilter = this.state.nameFilter;
    
    const filterCharacters = charactersData.filter((characterData) => {
      return characterData.name.toUpperCase().includes(nameFilter.toUpperCase())
    });
    
    filterCharacters.sort(function sortByName(a, b) {
      if (a.name < b.name) {
        return -1;
      } 
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
    return filterCharacters;
  };
    
  
  renderCharacterDetail(props){
    const charactersData = this.state.charactersData;

    const dataClickedCharacter = charactersData.find((characterData) => 
    {return characterData.id === parseInt(props.match.params.characterId)});

    if (dataClickedCharacter !== undefined){
      return (
        <>
          <CharacterDetail data={dataClickedCharacter}/>
        </>
    )} else {
      return <p>"The character you are looking for doesn't exist"</p>
    }
  }

  
  render() {
    const filteredData = this.filteredCharacters();
    const nameFilter= this.state.nameFilter;
   
    console.log(this.state);
    return (
      <div className="app">
        <Header  />
        <Switch>
            <Route path="/character-detail/:characterId" render={this.renderCharacterDetail} ></Route>
            <Route exact path="/">
              <main className="main" role="main">
                <Filters handleFilter={this.handleFilter} nameFilter={nameFilter}/>
                <CharacterList charactersData={filteredData} nameFilter={nameFilter}/>
              </main>
            </Route>
        </Switch>
        <Footer />
      </div>
    );
  }
}




export default App;