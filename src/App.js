import React, { Component } from 'react';
import './App.css';
import steem from 'steem';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userData: []
    }
  }

  componentDidMount() {
    // Retrieves and console.log data about the creators of Steemit
    steem.api.getAccounts(['ned', 'dan'], (err, result) => {
      console.log(err, result);
    });


  /*  steem.api.getState('/trends/funny', function(err, result) {
	     console.log(err, result);
    });
  */
  }


  render() {
    return (
      <div className="App">
      </div>
    );
  }
}

export default App;
