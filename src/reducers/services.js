import { RECEIVE_SERVICES, REQUEST_SERVICES } from '../actions/services.js';

function services(
  state = {
    isFetching: false,
    items: []
  },
  action
) {
  switch (action.type) {
    case REQUEST_SERVICES:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case RECEIVE_SERVICES:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.data,
      });
    default:
      return state;
  };
};
  
export function dataForServices(state = {}, action) {
  switch (action.type) {
    case RECEIVE_SERVICES:
    case REQUEST_SERVICES:
      return Object.assign({}, state, {
        services: services(state[action.data], action)
      });
    default:
      return state;
  };
};