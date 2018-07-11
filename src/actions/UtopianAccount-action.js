import dsteem from 'dsteem';
import { Client } from 'dsteem';

export function fetchUtopianAccount() {
  return function (dispatch) {
    dispatch({ type: "FETCH_UTOPIAN_ACCOUNT" });


    const client = new Client('https://api.steemit.com')

    const utopianAccount = {
      tag: 'nicknyr',
      limit: 20
    }



     client.database
       .getDiscussions('blog', utopianAccount)
       .then((response) => {
         dispatch({ type: "FETCH_UTOPIAN_ACCOUNT_FULFILLED", payload: response })
       })
      .catch((err) => {
        dispatch({ type: "FETCH_UTOPIAN_ACCOUNT_REJECTED", payload: err })
      })
  }
}
