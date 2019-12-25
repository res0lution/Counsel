import { combineReducers } from 'redux';
import {REQUEST_SLIDES, RECEIVE_SLIDES} from '../actions';

function slides(
  state = {
    isFetching: false,
    didInvalidate: false,
    items: []
  },
  action
) {
  switch (action.type) {
    case REQUEST_SLIDES:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case RECEIVE_SLIDES:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.slides,
      })
    default:
      return state
  }
}

function slidesForSlider(state = {}, action) {
  switch (action.type) {
    case RECEIVE_SLIDES:
    case REQUEST_SLIDES:
      return Object.assign({}, state, {
        [action.slides]: slides(state[action.slides], action)
      })
    default:
      return state
  }
}

const rootReducer = combineReducers({slidesForSlider});

export default rootReducer;