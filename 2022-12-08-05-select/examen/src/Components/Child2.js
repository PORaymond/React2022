import React from 'react';
import { Component } from 'react';

class Child2 extends React.Component {
    render(){
       return(
          <div>In Child2: {this.props.value} </div>
       )
    }
 }

 export default Child2;