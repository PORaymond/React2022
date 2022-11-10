import { Component } from "react";
import {Button, Select} from "semantic-ui-react";
class Recherche extends Component {

    state = { depart: "", categorie:"" }


    render(){

        const optionsDpt = [
            { value: "44", key: "44", text:"Loire Atlantique"},
            { value: "49", key: "49", text:"Maine et Loire"},
            { value: "53", key: "53", text:"Mayenne"},
            { value: "72", key: "72", text:"Sarthe"},
            { value: "85", key: "85", text:"Vendée"},
        ];


        const optionsType = [
            { value: "cpam", key:"cpam", text: "Caisse primaire d'assurance maladie"},
            { value: "cci", key:"cci", text: "Chambre de commerce et d'industrie"},
            { value: "crous", key:"crous", text: "Crous et ses antennes"}
        ]


        return(
            <div className="recherche">
                <Select placeholder="Choisissez un département" options={optionsDpt} value = {this.state.depart} />
                <Select placeholder="Choisissez une administration"  options={optionsType}  value= {this.state.categorie} />
                <Button primary> Lancer la recherche </Button>
                <Button secondary> Vider la recherche </Button>


            </div>
        )
    }
}
export default Recherche;
