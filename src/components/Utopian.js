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

  console.log(this.props.fetchUtopian);

      return (
        <div className="utopian-items">
          <p>
            <strong>Author:</strong>
            {/*author[i]*/}
          </p>
          <p>
            <strong>Title:</strong>

          </p>
          <p>
            <strong>Pending Payout:</strong>
            {/*author[i]*/}
          </p>
        </div>
      )


    return (
      <div className="utopian-container">
        {/*page*/}
      </div>
    );
  }
}


 const mapDispatchToProps = dispatch => ({
  fetchUtopian: () => dispatch(fetchUtopian())
})



const mapStateToProps = state => ({
  data: state.utopianReducer
  //fetchUtopian
})

export default connect(mapStateToProps, mapDispatchToProps)(Utopian);
//export default connect(mapStateToProps)(Utopian);
//export default compose(applyMiddleware(thunk))(createStore)(Utopian);
