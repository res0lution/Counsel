import { RECEIVE_SLIDES, REQUEST_SLIDES } from '../actions/slides.js';

function slides(
  state = {
    isFetching: false,
    items: []
  },
  action
) {
  switch (action.type) {
    case REQUEST_SLIDES:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case RECEIVE_SLIDES:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.slides,
      });
    default:
      return state;
  };
};
  
export function slidesForSlider(state = {}, action) {
  switch (action.type) {
    case RECEIVE_SLIDES:
    case REQUEST_SLIDES:
      return Object.assign({}, state, {
        slides: slides(state[action.slides], action)
      });
    default:
      return state;
  };
};