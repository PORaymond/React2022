import {Card} from "semantic-ui-react";

const Etablissement = (props) => {
   return (
      <Card>
         <Card.Content>

            <Card.Header>
               <p>{props.properties.nom}</p>
            </Card.Header>

            <Card.Meta>
               <p>{props.properties.telephone}</p>
               <p>{props.properties.email}</p>
            </Card.Meta>

         </Card.Content>
      </Card>)
}
export default Etablissement;
