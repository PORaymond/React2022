import './App.css';
import Recherche from './Composants/Recherche';
import React, { Component } from 'react';
import Etablissement from './Composants/Etablissement';
import { Message, Card } from 'semantic-ui-react';

class App extends Component {

  state = {

    data: [],
    error: ''
  }

  onSearch = async (dpt, type) => {

    if (dpt && type) {
      try {
        let response = await fetch(`https://etablissements-publics.api.gouv.fr/v3/departements/${dpt}/${type}`);
        let donne = await response.json();
        console.log(donne);
        this.setState({ data: donne.features, error: '' });

      } catch (e) {
        this.setState({ error: "Erreur lors de la recherche" })
      }
    } else {
      this.setState({ error: "Merci de choisir un département et un établissement" })
    }
  }

  onEmpty = () => {
    this.setState({ data: [], error: '' })
  }

  renderResults = () => {
    console.log(this.state.data);
    return this.state.data.map((compteur) => {
      return <Etablissement key={compteur.properties.id} properties={compteur.properties} />
    })
  }

  render() {
    return (
      <div className="App">
        <h1> Annuaire des administrations </h1>
        <Recherche onSearch={this.onSearch} onEmpty={this.onEmpty} />
        {this.state.error ? <Message warning>{this.state.error}</Message> : undefined}
        {this.state.data ?
          <Card.Group>
            { this.renderResults() }
          </Card.Group>
          : undefined }

       


      </div>
    );
  }
}


export default App;



 // onSearch= (dpt,type)=>{
  //  console.log(dpt,type)
  //}