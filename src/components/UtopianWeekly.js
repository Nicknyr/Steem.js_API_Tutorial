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


class UtopianWeekly extends Component {
    componentDidMount() {
      this.props.fetchUtopianAccount();
    }


  render() {
  const utopian = Object.keys(this.props.data.utopianAccountPosts);

  var author = jsonQuery('[**][author]', { data: this.props.data.utopianAccountPosts }).value
  var title = jsonQuery('[**][title]', { data: this.props.data.utopianAccountPosts }).value
  var payout = jsonQuery('[*][total_payout_value]', { data: this.props.data.utopianAccountPosts }).value
  var postLink = jsonQuery('[*][url]', { data: this.props.data.utopianAccountPosts }).value
  var pendingPayout = jsonQuery('[*][pending_payout_value]', { data: this.props.data.utopianAccountPosts }).value
  var netVotes = jsonQuery('[*][net_votes]', { data: this.props.data.utopianAccountPosts }).value
  var cashoutTime = jsonQuery('[*][cashout_time]', { data: this.props.data.utopianAccountPosts }).value;


  var re = /Weekly(?=Top)/;

   let display = utopian.map((post, i) => {

      return (
        // Ternary Operator filters out posts not made by utopian-io itself
        author[i] === 'utopian-io' ? (
           re ? (
          <div className="utopian-items">
            <h3 className="author">
              <strong>Author:  </strong>
              <a href={`https://www.steemit.com/@` + author[i]}>{author[i]}</a>
            </h3>
            <p>
              <strong>Title:  </strong>
              <a href={`https://www.steemit.com` + postLink[i]}>{title[i]}</a>
            </p>
            <p class="votes">
              <strong>Votes:  </strong>
              {netVotes[i]}
            </p>
          </div>
        ) : null
        ) : null
      )
    });


    return (
      <div>
      <Menu />
      <Container>
        <div className="utopian-container">
          <h1>Top Utopian Contributions by Week</h1>
          <hr/>
          <img src={logo} id="logo"/>
          {display}
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
  data: state.utopianAccountReducer
})

export default connect(mapStateToProps, mapDispatchToProps)(UtopianWeekly);
