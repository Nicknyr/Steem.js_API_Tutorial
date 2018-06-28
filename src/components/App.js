import React, { Component } from 'react';
import './App.css';
import steem from 'steem';
import dsteem from 'dsteem';
import Utopian from './Utopian';
import UtopianTrending from './UtopianTrending';


class App extends Component {

  render() {
    return (
      <div className="app-container">
        <Utopian />
      </div>
    );
  }
}


export default App;
