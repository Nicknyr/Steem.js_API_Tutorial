import React, { Component } from 'react';
import Button from 'muicss/lib/react/button';
import Appbar from 'muicss/lib/react/appbar';

class Menu extends Component {

  render() {
    return (
      <div className="menu-container">
        <Appbar>
          <Button variant="raised" color="accent">Hot</Button>
          <Button variant="raised" color="accent">Trending</Button>
          <Button variant="raised" color="accent">Cash</Button>
          <Button variant="raised" color="accent">Utopian-io</Button>
          <Button variant="raised" color="accent">Weekly Picks</Button>
        </Appbar>
      </div>
    );
  }
}

export default Menu;
