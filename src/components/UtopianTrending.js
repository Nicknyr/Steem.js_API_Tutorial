import Menu from '../elements/Menu';
import Footer from '../elements/Footer';
import React, { Component } from 'react';
import dsteem from 'dsteem';
import { Client } from 'dsteem';
import jsonQuery from 'json-query';
import { connect } from 'react-redux';
import { fetchUtopianTrending } from '../actions/UtopianTrending-action';
import {bindActionCreators, compose, applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import moment from 'moment';
import Container from 'muicss/lib/react/container';
//import { withRouter } from 'react-router-dom'
import logo from '../elements/utopian-logo.svg'


class Utopian extends Component {
    componentDidMount() {
      this.props.fetchUtopianTrending();
    }


  render() {
  const utopian = Object.keys(this.props.data.utopianTrendingCash);

  var author = jsonQuery('[**][author]', { data: this.props.data.utopianTrendingCash }).value
  var title = jsonQuery('[**][title]', { data: this.props.data.utopianTrendingCash }).value
  var payout = jsonQuery('[*][total_payout_value]', { data: this.props.data.utopianTrendingCash }).value
  var postLink = jsonQuery('[*][url]', { data: this.props.data.utopianTrendingCash }).value
  var pendingPayout = jsonQuery('[*][pending_payout_value]', { data: this.props.data.utopianTrendingCash }).value
  var netVotes = jsonQuery('[*][net_votes]', { data: this.props.data.utopianTrendingCash }).value
  var cashoutTime = jsonQuery('[*][cashout_time]', { data: this.props.data.utopianTrendingCash }).value;

  var cashout = (new Date(cashoutTime)).toString();
  console.log(cashout);

      let display = utopian.map((post, i) => {
      return (
        <div className="utopian-items">
          <p className="author">
            <strong>Author:  </strong>
            {author[i]}
          </p>
          <p>
            <strong>Title:  </strong>
            <a href={`https://www.steemit.com` + postLink[i]}>{title[i]}</a>
          </p>
          <p>
            <strong>Pending Payout:  </strong>
            {pendingPayout[i]}
          </p>
          <p>
            <strong>Votes:  </strong>
            {netVotes[i]}
          </p>
          <p>
            <strong>Cashout:   </strong>
            {moment(cashoutTime[i]).format('MMMM Do YYYY, h:mm:ss a')}
            {/*moment(cashoutTime[i]).endOf('day').fromNow()*/}
          </p>
        </div>
      )
    });


    return (
      <div>
        <Menu />
        <Container>
          <div className="utopian-container">
            <h1>Top Utopian-io Posts from the Steem Blockchain</h1>
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
  fetchUtopianTrending: () => dispatch(fetchUtopianTrending())
})



const mapStateToProps = state => ({
  data: state.utopianTrendingReducer
})

export default connect(mapStateToProps, mapDispatchToProps)(Utopian);
