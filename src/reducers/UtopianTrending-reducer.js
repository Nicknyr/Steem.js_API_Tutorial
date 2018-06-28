
export default function reducer (state={
  utopianTrendingCash: [],
  fetching: false,
  fetched: false,
  error: null,
}, action) {

  switch (action.type) {
    case "FETCH_UTOPIAN_TRENDING": {
      return {...state, fetching: true}
    }
    case "FETCH_UTOPIAN_TRENDING_REJECTED": {
      return {...state, fetching: false, error: action.payload}
    }
    case "FETCH_UTOPIAN_TRENDING_FULFILLED": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        utopianTrendingCash: action.payload
      }
    }
  }

  return state;
}
