export default function reducer (state={
  utopianAccountPosts: [],
  fetching: false,
  fetched: false,
  error: null,
}, action) {

  switch (action.type) {
    case "FETCH_UTOPIAN_ACCOUNT": {
      return {...state, fetching: true}
    }
    case "FETCH_UTOPIAN_ACCOUNT_REJECTED": {
      return {...state, fetching: false, error: action.payload}
    }
    case "FETCH_UTOPIAN_ACCOUNT_FULFILLED": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        utopianAccountPosts: action.payload
      }
    }
  }
  return state;
}
