import './App.css';
import Recherche from "./Composants/Recherche";
import {Component} from "react";

class App extends Component {

   state = {}

   render() {
      return (<div className="App">
         <h1>Lab 01 Semantic UI React</h1>
         <Recherche/>
      </div>);
   }
}

export default App;
