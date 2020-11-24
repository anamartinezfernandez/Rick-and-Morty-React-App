import React from "react";
import "../stylesheet/index.scss";
import "../stylesheet/app.scss";
import getData from "../services/getData";

import Header from "./Header";
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
    
    const filteredData = charactersData.filter((characterData) => {return characterData.name.toUpperCase().includes(nameFilter.toUpperCase())});
    
      return filteredData;
    };

 
  renderCharacterDetail(props){
    console.log("entro en detail");
    console.log(props.match.params);
    console.log(props.match.params.characterId);
    const charactersData = this.state.charactersData;
    console.log(charactersData);

    const dataObject = charactersData.find((characterData) => 
    {return characterData.id === parseInt(props.match.params.characterId)});
    console.log(props);
    console.log(dataObject);
    
      return (<CharacterDetail data={dataObject}/>)
  }
    
    /*  Aquí poner un if else para poner si el producto es encontrado o no encontrado */
   /*  Devolverle las propiedades por separado */

 

  render() {
  const filteredData = this.filteredCharacters();


    console.log(this.state);
    return (
      <div className="page">
        <Switch>
            <Route path="/character-detail/:characterId" render={this.renderCharacterDetail} ></Route>
            <Route exact path="/">
              <Header  />
              <main>
                <CharacterList charactersData={filteredData} handleFilter={this.handleFilter}/>
              </main>
            </Route>
          
        </Switch>
        <Footer />
      </div>
    );
  }
}
export default App;