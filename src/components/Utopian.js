import Menu from '../elements/Menu';
import Container from 'muicss/lib/react/container';
import logo from '../elements/utopian-logo.svg'
import React, { Component } from 'react';
import dsteem from 'dsteem';
import { Client } from 'dsteem';
import jsonQuery from 'json-query';
import { connect } from 'react-redux';
import { fetchUtopianHot } from '../actions/UtopianHot-action';
import {bindActionCreators, compose, applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import moment from 'moment';


class Utopian extends Component {
    componentDidMount() {
      this.props.fetchUtopianHot();
    }


  render() {
  const utopian = Object.keys(this.props.data.utopianCash);

  var author = jsonQuery('[**][author]', { data: this.props.data.utopianCash }).value
  var title = jsonQuery('[**][title]', { data: this.props.data.utopianCash }).value
  var payout = jsonQuery('[*][total_payout_value]', { data: this.props.data.utopianCash }).value
  var postLink = jsonQuery('[*][url]', { data: this.props.data.utopianCash }).value
  var pendingPayout = jsonQuery('[*][pending_payout_value]', { data: this.props.data.utopianCash }).value
  var netVotes = jsonQuery('[*][net_votes]', { data: this.props.data.utopianCash }).value
  var cashoutTime = jsonQuery('[*][cashout_time]', { data: this.props.data.utopianCash }).value;

  var cashout = (new Date(cashoutTime)).toString();
  console.log(cashout);

      let display = utopian.map((post, i) => {
      return (
        <div className="utopian-items">
          <h3 className="author">
            <strong>Author:  </strong>
            <a href={`https://www.steemit.com/@` + author[i]}>{author[i]}</a>
          </h3>
          <p>
            <strong>Title:  </strong>
            <a href={`https://www.steemit.com` + postLink[i]}>{title[i]}</a>
          </p>
          <p>
            <strong>Pending Payout:  </strong>
            {pendingPayout[i]}
          </p>
          <p>
            <strong>Cashout:   </strong>
            {moment(cashoutTime[i]).format('MMMM Do YYYY, h:mm:ss a')}
            {/*moment(cashoutTime[i]).endOf('day').fromNow()*/}
          </p>
          <p class="votes">
            <strong>Votes:  </strong>
            {netVotes[i]}
          </p>
        </div>
      )
    });


    return (
      <Container>
        <div className="utopian-container">
          <h1>Top Utopian-io Posts from the Steem Blockchain</h1>
          <hr/>
          <img src={logo} id="logo"/>
          {display}
        </div>
      </Container>
    );
  }
}


 const mapDispatchToProps = dispatch => ({
  fetchUtopianHot: () => dispatch(fetchUtopianHot())
})



const mapStateToProps = state => ({
  data: state.utopianHotReducer
})

export default connect(mapStateToProps, mapDispatchToProps)(Utopian);
