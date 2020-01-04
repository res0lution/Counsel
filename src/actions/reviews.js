import axios from 'axios';

export const REQUEST_REVIEWS = 'REQUEST_REVIEWS';
export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';

function receiveReviews(reviews, json) {
  return {
    type: RECEIVE_REVIEWS,
    reviews: json,
  };
};
  
function requestReviews(reviews) {
  return {
    type: REQUEST_REVIEWS,
    reviews,
  };
};
  
function shouldFetchReviews(state) {
  const reviews = state.reviewsForTestimonials.dataReviews;
  if (!reviews) {
    return true;
  } else if (reviews.isFetching) {
    return false;
  };
};
  
const fetchReviews = (reviews) => (dispatch) => {
  dispatch(requestReviews(reviews));
  return axios.get(`http://localhost:3001/reviews`)
    .then(
      (json)=> { dispatch(receiveReviews(reviews, json.data)) },
      (error)=>{ console.log(error)}
    );
};
  
export const fetchReviewsForTestimonials = (reviews) => (dispatch, getState) => {
  if (shouldFetchReviews(getState())) {
    return dispatch(fetchReviews(reviews));
  };
};