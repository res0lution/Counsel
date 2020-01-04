import axios from 'axios';

export const REQUEST_GRAPHDATA = 'REQUEST_GRAPHDATA';
export const RECEIVE_GRAPHDATA = 'RECEIVE_GRAPHDATA';

function receiveGraphdata(data, json) {
  return {
    type: RECEIVE_GRAPHDATA,
    data: json,
  };
};

function requestGraphdata(data) {
  return {
    type: REQUEST_GRAPHDATA,
    data,
  };
};

const fetchGraphdata = (data) => (dispatch) => {
  dispatch(requestGraphdata(data));
  return axios.get(`http://localhost:3001/graph`)
    .then(
      (json)=> { dispatch(receiveGraphdata(data, json.data)) },
      (error)=>{ console.log(error)}
    )
};

function shouldFetchGraphdata(state) {
  const data = state.data;
  if (!data) {
    return true;
  } else if (data.isFetching) {
    return false;
  };
};

export const fetchDataForGraph = (data) => (dispatch, getState) => {
  if (shouldFetchGraphdata(getState())) {
    return dispatch(fetchGraphdata(data));
  };
};