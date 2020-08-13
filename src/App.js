import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import WeatherDisplay from './components/WeatherDisplay'
import Button from '@material-ui/core/Button';
import TransitionsModal from './components/ModalWindow'
const PLACES = [
  { name: "Moscow" },
  { name: "Saint Petersburg" },
  { name: "New York" },
  { name: "London"}
];
class App extends Component {

  
  render() {
    return (
      <div className="App">
        <TransitionsModal  
          PLACES = {PLACES}
        />
      
      </div>
    );
  }
}

export default App;
