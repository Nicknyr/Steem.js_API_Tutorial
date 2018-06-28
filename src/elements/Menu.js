import React, { Component } from 'react';
import Button from 'muicss/lib/react/button';
import Appbar from 'muicss/lib/react/appbar';

class Menu extends Component {

  render() {
    return (
      <div className="menu-container">
        <Appbar>
          <Button color="accent">Hot</Button>
          <Button variant="raised" color="accent">Trending</Button>
          <Button variant="raised" color="accent">Cash</Button>
        </Appbar>
      </div>
    );
  }
}

export default Menu;
