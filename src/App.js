import React, { Component } from 'react';
import './App.css';
import Routes from './Routes';
import {NotificationContainer} from "react-notifications";
import HeaderPaws from './components/HeaderPaws';


class App extends Component {
  constructor(){
    super()

  }
  render() {
    return (
      <div className="App">
        <HeaderPaws />
        <Routes />
        <NotificationContainer />
      </div>
    );
  }
}

export default App;