import './App.css';
import Recherche from "./Composants/Recherche";
import {Component} from "react";

class App extends Component {

   state = { data:[], error:''}

   onChercher = (a,b) =>{
      console.log(a,b)

   }

   render() {
      return (<div className="App">
         <h1>Lab 01 Semantic UI React</h1>
         <Recherche onChercher = {this.onChercher}/>
      </div>);
   }
}

export default App;
