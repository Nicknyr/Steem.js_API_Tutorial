import Menu from '../elements/Menu';
import Footer from '../elements/Footer';
import Container from 'muicss/lib/react/container';
import logo from '../elements/utopian-logo.svg'
import React, { Component } from 'react';
import dsteem from 'dsteem';
import { Client } from 'dsteem';
import jsonQuery from 'json-query';
import { connect } from 'react-redux';
import { fetchUtopianAccount } from '../actions/UtopianAccount-action';
import {bindActionCreators, compose, applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import moment from 'moment';

class UtopianAccount extends Component {
    componentDidMount() {
      this.props.fetchUtopianAccount();
    }


  render() {
  //const utopian = Object.keys(this.props.data.utopianAccountPosts);

  //console.log(utopian);
  console.log("props: " + this.props);

  //  let display = utopian.map((post, i) => {
      return (
        <div className="utopian-items">
          <h1>Utopian Account Page</h1>
        </div>
      )
  //  });


    return (
      <div>
      <Menu />
      <Container>
        <div className="utopian-container">
        </div>
      </Container>
      <Footer />
      </div>
    );
  }
}


 const mapDispatchToProps = dispatch => ({
  fetchUtopianAccount: () => dispatch(fetchUtopianAccount())
})



const mapStateToProps = state => ({
  //data: state.utopianHotReducer
  data: state
})

export default connect(mapStateToProps, mapDispatchToProps)(UtopianAccount);
