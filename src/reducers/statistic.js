import { RECEIVE_STATS, REQUEST_STATS } from '../actions/statistic.js';

function stats(
  state = {
    isFetching: false,
    items: []
  },
  action
) {
  switch (action.type) {
    case REQUEST_STATS:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case RECEIVE_STATS:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.stats,
      });
    default:
      return state;
  };
};
  
export function statsForStatistic(state = {}, action) {
  switch (action.type) {
    case RECEIVE_STATS:
    case REQUEST_STATS:
      return Object.assign({}, state, {
        dataStats: stats(state[action.stats], action)
      });
    default:
      return state;
  };
};