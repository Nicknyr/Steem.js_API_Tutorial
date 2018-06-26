import React, { Component } from 'react';
import dsteem from 'dsteem';
import { Client } from 'dsteem';
import jsonQuery from 'json-query';
import { connect } from 'react-redux';
import { fetchUtopian } from '../actions/Utopian-action';
import {bindActionCreators, compose, applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';

class Utopian extends Component {
    componentDidMount() {
      this.props.fetchUtopian();
    }


  render() {
  const utopian = Object.keys(this.props.data.utopianCash);
  console.log(this.props);
  //console.log(utopian);

  var author = jsonQuery('[**][author]', { data: this.props.data.utopianCash }).value
  console.log(author);

  var title = jsonQuery('[**][title]', { data: this.props.data.utopianCash }).value
  var payout = jsonQuery('[*][total_payout_value]', { data: this.props.data.utopianCash }).value
  var postLink = jsonQuery('[*][url]', { data: this.props.data.utopianCash }).value
  var pendingPayout = jsonQuery('[*][pending_payout_value]', { data: this.props.data.utopianCash }).value
  var netVotes = jsonQuery('[*][net_votes]', { data: this.props.data.utopianCash }).value

      let display = utopian.map((post, i) => {
      return (
        <div className="utopian-items">
          <p>
            <strong>Author:</strong>
            {author[i]}
          </p>
          <p>
            <strong>Title:</strong>
            <a href={`https://www.steemit.com` + postLink[i]}>{title[i]}</a>
          </p>
          <p>
            <strong>Pending Payout:</strong>
            {pendingPayout[i]}
          </p>
          <p>
            <strong>Votes: </strong>
            {netVotes[i]}
          </p>
        </div>
      )
    });


    return (
      <div className="utopian-container">
        {display}
      </div>
    );
  }
}


 const mapDispatchToProps = dispatch => ({
  fetchUtopian: () => dispatch(fetchUtopian())
})



const mapStateToProps = state => ({
  data: state.utopianReducer
})

export default connect(mapStateToProps, mapDispatchToProps)(Utopian);
