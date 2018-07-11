// Combine Reducers in this file and export them
import { combineReducers } from 'redux'
import utopianHotReducer from './UtopianHot-reducer';
import utopianTrendingReducer from './UtopianTrending-reducer';
import utopianAccountReducer from './UtopianAccount-reducer';

export default combineReducers({
  utopianHotReducer,
  utopianTrendingReducer,
  utopianAccountReducer
})
