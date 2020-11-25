import React from "react";

import "../stylesheet/index.scss";
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
    console.log(this.props);
      this.state = {
        charactersData: [],
        nameFilter: ""
      };
    this.handleFilter = this.handleFilter.bind(this);
    this.renderCharacterDetail = this.renderCharacterDetail.bind(this);
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
  }

  filteredCharacters(){
    const charactersData = this.state.charactersData;
    const nameFilter = this.state.nameFilter;
    
    const filterCharacters = charactersData.filter((characterData) => {
      return characterData.name.toUpperCase().includes(nameFilter.toUpperCase())
    });
    
    filterCharacters.sort(function sortByName(a, b) {
      if (a.name < b.name) {
        //a will come before b
        return -1;
      } 
      if (a.name > b.name) {
        //b will come before a
        return 1;
      }
      // when a equals b:
      return 0;
    });
    return filterCharacters;
  };
    
  
  renderCharacterDetail(props){
    const charactersData = this.state.charactersData;
    console.log(charactersData);

    const dataClickedCharacter = charactersData.find((characterData) => 
    {return characterData.id === parseInt(props.match.params.characterId)});
      return (<CharacterDetail data={dataClickedCharacter}/>)
  }

  
  render() {
    const filteredData = this.filteredCharacters();
    const nameFilter= this.state.nameFilter;
   
    console.log(this.state);
    return (
      <div className="page">
        <Switch>
            <Route path="/character-detail/:characterId" render={this.renderCharacterDetail} ></Route>
            <Route exact path="/">
              <Header  />
              <main>
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