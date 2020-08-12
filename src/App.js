import React,{Component} from 'react';
import './App.css';
import Greet from './components/Greet';

class App extends Component {
  render(){
    return (
    <Greet msg={<h1>Hello DG</h1>}/>
    );
  }
  
}

export default App;
