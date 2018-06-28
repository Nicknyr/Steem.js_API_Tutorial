export default function reducer (state={
  utopianCash: [],
  fetching: false,
  fetched: false,
  error: null,
}, action) {

  switch (action.type) {
    case "FETCH_UTOPIAN_HOT": {
      return {...state, fetching: true}
    }
    case "FETCH_UTOPIAN_HOT_REJECTED": {
      return {...state, fetching: false, error: action.payload}
    }
    case "FETCH_UTOPIAN_HOT_FULFILLED": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        utopianCash: action.payload
      }
    }
  }
  return state;
}
