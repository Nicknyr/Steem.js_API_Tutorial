import dsteem from 'dsteem';
import { Client } from 'dsteem';

export function fetchUtopianHot() {
  return function (dispatch) {
    dispatch({ type: "FETCH_UTOPIAN_HOT" });


    const client = new Client('https://api.steemit.com')

    var utopianHot = {
      tag: 'utopian-io',
      limit: 20
    }

     client.database
       .getDiscussions('hot', utopianHot)
       .then((response) => {
         dispatch({ type: "FETCH_UTOPIAN_HOT_FULFILLED", payload: response })
       })
      .catch((err) => {
        dispatch({ type: "FETCH_UTOPIAN_HOT_REJECTED", payload: err })
      })
  }
}
