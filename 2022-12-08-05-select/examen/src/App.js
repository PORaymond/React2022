import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Child1 from './Components/Child1';
import Child2 from './Components/Child2';

class App extends Component {
 
  constructor(){
    super();
    this.state = { value: null}
    this.change = this.change.bind(this)
 }

 change(value){
  this.setState({value})
}
  

  render() {
  return (
    <div>
             <Child1 value={this.state.value} change={this.change}/>
             <Child2 value={this.state.value}/>
      </div>
  );
}
}

export default App;
