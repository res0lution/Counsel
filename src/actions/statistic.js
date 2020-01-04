import axios from 'axios';

export const REQUEST_STATS = 'REQUEST_STATS';
export const RECEIVE_STATS = 'RECEIVE_STATS';

function receiveStats(stats, json) {
  return {
    type: RECEIVE_STATS,
    stats: json,
  };
};
  
function requestStats(stats) {
  return {
    type: REQUEST_STATS,
    stats,
  };
};
  
function shouldFetchStats(state) {
  const stats = state.statsForStatistic.dataStats;
  if (!stats) {
    return true;
  } else if (stats.isFetching) {
    return false;
  };
};
  
const fetchStats = (stats) => (dispatch) => {
  dispatch(requestStats(stats));
  return axios.get(`http://localhost:3001/statistic`)
    .then(
      (json)=> { dispatch(receiveStats(stats, json.data)) },
      (error)=>{ console.log(error)}
    );
};
  
export const fetchStatsForStatistic = (stats) => (dispatch, getState) => {
  if (shouldFetchStats(getState())) {
    return dispatch(fetchStats(stats));
  };
};