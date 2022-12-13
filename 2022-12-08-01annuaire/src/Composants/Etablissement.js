import React from 'react';
import { Card } from 'semantic-ui-react';
 
const Etablissement = ({ properties })  => {
    
    const { nom, telephone, email } = properties;
    
    return (
        <Card>
            <Card.Content>
                <Card.Header>{ nom }</Card.Header>
                <Card.Meta>{ telephone }</Card.Meta>
                <Card.Meta>{ email }</Card.Meta>             
            </Card.Content>
        </Card>
    )
}
 
export default Etablissement;
