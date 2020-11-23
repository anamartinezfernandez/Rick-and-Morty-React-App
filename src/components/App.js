import React from "react";
import "../stylesheet/index.scss";
import getData from "../services/getData";



class App extends React.Component {
  constructor(props){
    super(props);
    console.log(this.props);
      this.state = {
        charactersData: [],
      }
  } 


  componentDidMount(){
    getData.getDataFromApi().then((cleanData => {
      console.log(cleanData);
      this.setState({
        charactersData: cleanData
      });
      
    })
  )}

  render() {
    console.log(this.state);
    return (
      <div className="App">
        
        
      </div>
    );
  }
}
export default App;