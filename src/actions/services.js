import axios from 'axios';

export const REQUEST_SERVICES = 'REQUEST_SERVICES';
export const RECEIVE_SERVICES = 'RECEIVE_SERVICES';

function receiveData(data, json) {
  return {
    type: RECEIVE_SERVICES,
    data: json,
  };
};
  
function requestData(data) {
  return {
    type: REQUEST_SERVICES,
    data,
  };
};
  
function shouldFetchData(state) {
  const data = state.data;
  if (!data) {
    return true;
  } else if (data.isFetching) {
      return false;
  };
};
  
const fetchData = (data) => (dispatch) => {
  dispatch(requestData(data));
  return axios.get(`http://localhost:3001/services`)
    .then(
      (json)=> { dispatch(receiveData(data, json.data)) },
      (error)=>{ console.log(error)}
    );
};
  
export const fetchDataForServices = (data) => (dispatch, getState) => {
  if (shouldFetchData(getState())) {
    return dispatch(fetchData(data));
  };
};