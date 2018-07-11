import dsteem from 'dsteem';
import { Client } from 'dsteem';

export function fetchUtopianTrending() {
  return function(dispatch){
    dispatch({ type: "FETCH_UTOPIAN_TRENDING"});

    const client = new Client('https://api.steemit.com')

    var utopianTrending = {
      tag: 'utopian-io',
      limit: 20
    }

    client.database
      .getDiscussions('trending', utopianTrending)
      .then((response) => {
        dispatch({ type: "FETCH_UTOPIAN_TRENDING_FULFILLED", payload: response})
      })
      .catch((err) => {
        dispatch({ type: "FETCH_UTOPIAN_TRENDING_REJECTED", payload: err})
      })
  }

}
