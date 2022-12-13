import React from 'react';
import { Component } from 'react';

class Child1 extends React.Component {
    render(){
       return(
          <div>
            In Child1:
            <select value={this.props.value} onChange={(e) => this.props.change(e.target.value)}>
               <option value='1'>1</option>
               <option value='2'>2</option>
               <option value='3'>3</option>
            </select>
          </div>
       )
    }
 }

 export default Child1;