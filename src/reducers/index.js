import { combineReducers } from 'redux';
import {REQUEST_SLIDES, RECEIVE_SLIDES, REQUEST_RISKS, RECEIVE_RISKS} from '../actions';

const slides = (
  state = {
    isFetching: false,
    slides: []
  },
  action
) => {
  switch (action.type) {
    case REQUEST_SLIDES:
      return {...state, isFetching: true,};
    case RECEIVE_SLIDES:
      return {...state, isFetching: false, slides: action.slides,};
    default:
      return state;
  };
};

function risks( 
  state = {
    risks : {
      title: '',
      subtitle: '',
      text: '',
    }
  },
  action
) {
  switch (action.type) {
    case RECEIVE_RISKS:
      return Object.assign({}, state, {
       risks: action.info,
      })
    default:
      return state;
  };
}

function stateSlider(state = {}, action) {
  switch (action.type) {
    case RECEIVE_SLIDES:
    case REQUEST_SLIDES:
      return {...state, slides: slides(state[action.slides], action)}
    default:
      return state;
  };
};

function infoAboutRisks(state = {}, action) {
  switch (action.type) {
    case RECEIVE_RISKS:
      return Object.assign({}, state, {
        risks: risks(state[action.info], action)
      });
    default:
      return state;
  };
}

const rootReducer = combineReducers({stateSlider, infoAboutRisks: infoAboutRisks});

export default rootReducer;