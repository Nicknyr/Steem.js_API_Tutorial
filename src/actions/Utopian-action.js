import dsteem from 'dsteem';
import { Client } from 'dsteem';

export function fetchUtopian() {
  return function (dispatch) {
    dispatch({ type: "FETCH_UTOPIAN" });


    const client = new Client('https://api.steemit.com')

    var utopianHot = {
      tag: 'utopian-io',
      limit: 20
    }

     client.database
       .getDiscussions('hot', utopianHot)
       .then((response) => {
         dispatch({ type: "FETCH_UTOPIAN_FULFILLED", payload: response.data })
       })
      .catch((err) => {
        dispatch({ type: "FETCH_UTOPIAN_REJECTED", payload: err })
      })
  }
}
