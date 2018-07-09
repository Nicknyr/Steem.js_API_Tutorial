import React, { Component } from 'react';
import './App.css';
import steem from 'steem';
import dsteem from 'dsteem';
import Utopian from './Utopian';
import UtopianTrending from './UtopianTrending';
import Footer from '../elements/Footer';
import Menu from '../elements/Menu';

class App extends Component {

  render() {
    return (
      <div className="app-container">
        <Menu />
        <Utopian />
        <Footer />
      </div>
    );
  }
}


export default App;
