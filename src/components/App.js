import React, { Component } from 'react';
import './App.css';
import steem from 'steem';
import dsteem from 'dsteem';
import Utopian from './Utopian';
import UtopianTrending from './UtopianTrending';
import UtopianAccount from './UtopianAccount';
import UtopianWeekly from './UtopianWeekly';

import { BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="app-container">
          <Route path="/" exact component={Utopian} />
          <Route path="/trending" exact component={UtopianTrending} />
          <Route path="/utopianio" exact component={UtopianAccount} />
          <Route path="/bestof" exact component={UtopianWeekly} />
        </div>
      </Router>
    );
  }
}


export default App;
