import { RECEIVE_INFO, REQUEST_INFO } from '../actions/info.js';

function info( 
  state = {
    isFetching: false,
    items: []
  },
  action
) {
  switch (action.type) {
    case REQUEST_INFO:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case RECEIVE_INFO:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.info,
      });
    default:
      return state;
  };
};
  
export function infoForBlocks(state = {}, action) {
  switch (action.type) {
    case RECEIVE_INFO:
    case REQUEST_INFO:
      return Object.assign({}, state, {
        info: info(state[action.info], action)
      });
    default:
      return state;
  };
};