import axios from 'axios';

export const REQUEST_INFO = 'REQUEST_INFO';
export const RECEIVE_INFO = 'RECEIVE_INFO';

function receiveInfo(info, json) {
  return {
    type: RECEIVE_INFO,
    info: json,
  };
};
  
function requestInfo(info) {
  return {
    type: REQUEST_INFO,
    info,
  };
};
  
const fetchInfo = (info) => (dispatch) => {
  dispatch(requestInfo(info));
  return axios.get(`http://localhost:3001/info`)
    .then(
      (json)=> { dispatch(receiveInfo(info, json.data)) },
      (error)=>{ console.log(error)}
    )
};
  
function shouldFetchInfo(state) {
  const info = state.info;
  if (!info) {
    return true;
  } else if (info.isFetching) {
    return false;
  };
};
  
export const fetchInfoForBlocks = (info) => (dispatch, getState) => {
  if (shouldFetchInfo(getState())) {
    return dispatch(fetchInfo(info));
  };
};