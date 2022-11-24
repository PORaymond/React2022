import './App.css';
import Recherche from "./Composants/Recherche";
import {Component} from "react";
import {Message} from "semantic-ui-react";
import Etablissement from "./Composants/Etablissement";

class App extends Component {

   state = { data:[], error:''}

   onChercher = async (a,b) =>{
      if (a&&b){
         try{
            let reponse = await fetch(`https://etablissements-publics.api.gouv.fr/v3/departements/${a}/${b}`);
            let donnee = await reponse.json();
            this.setState({data:donnee.features, error:''});
         } catch (e) {
            this.setState({error:'Connexion no aboutie avec l’API'});
         }
      } else{
         this.setState({error:'Choisir les deux champs'})
      }
   }
   onVider = () => {
      this.setState({data:'', error:''});
   }

   render() {
      console.log (this.state.data, this.state.error);
      return (<div className="App">
         <h1>Lab 01 Semantic UI React</h1>
         <Recherche onChercher = {this.onChercher} onEmpty = {this.onVider}/>
         {this.state.error? <Message warning>{this.state.error}</Message>: undefined}
         <Etablissement/>
         <Etablissement/>
         <Etablissement/>
      </div>);
   }
}

export default App;
