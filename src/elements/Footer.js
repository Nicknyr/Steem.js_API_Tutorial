import React, { Component } from 'react';
import Appbar from 'muicss/lib/react/appbar';
import logo from '../elements/utopian-logo.svg';


class Footer extends Component {

  render() {
    return (
      <div className="footer">
        <p>This site uses the dsteem API to communicate with the Steem blockchain and display data pertaining to the Utopian.io Open Source Software project fetched from the blockchain.</p>
        <img src={logo} id="logo"/>
      </div>
    );
  }
}

export default Footer;
