import { RECEIVE_REVIEWS, REQUEST_REVIEWS } from '../actions/reviews.js';

function reviews(
  state = {
    isFetching: false,
    items: []
  },
  action
) {
  switch (action.type) {
    case REQUEST_REVIEWS:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case RECEIVE_REVIEWS:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.reviews,
      });
    default:
      return state;
  };
};
  
export function reviewsForTestimonials(state = {}, action) {
  switch (action.type) {
    case RECEIVE_REVIEWS:
    case REQUEST_REVIEWS:
      return Object.assign({}, state, {
        dataReviews: reviews(state[action.reviews], action)
      });
    default:
      return state;
  };
};