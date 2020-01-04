import { REQUEST_GRAPHDATA, RECEIVE_GRAPHDATA} from '../actions/graph.js';

function data( 
  state = {
    isFetching: false,
    items: []
  },
  action
) {
  switch (action.type) {
    case REQUEST_GRAPHDATA:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case RECEIVE_GRAPHDATA:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.data,
       });
    default:
      return state;
  };
};

export function dataForGraph(state = {}, action) {
  switch (action.type) {
    case RECEIVE_GRAPHDATA:
    case REQUEST_GRAPHDATA:
      return Object.assign({}, state, {
        dataGraph: data(state[action.data], action)
      });
    default:
      return state;
  };
};