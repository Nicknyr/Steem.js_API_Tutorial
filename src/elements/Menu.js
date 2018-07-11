import React, { Component } from 'react';
import Button from 'muicss/lib/react/button';
import Appbar from 'muicss/lib/react/appbar';

import { BrowserRouter as Router, Link } from 'react-router-dom';


class Menu extends Component {

  render() {
    return (
      <div className="menu-container">
        <Appbar>
          <Link to='/'><Button variant="raised" color="accent">Hot</Button></Link>
          <Link to='/trending'><Button variant="raised" color="accent">Trending</Button></Link>
          <Button variant="raised" color="accent">Cash</Button>
          <Link to='/utopianio'><Button variant="raised" color="accent">Utopian-io</Button></Link>
          <Button variant="raised" color="accent">Weekly Picks</Button>
        </Appbar>
      </div>
    );
  }
}

export default Menu;
