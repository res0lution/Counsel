import axios from 'axios';

export const REQUEST_SLIDES = 'REQUEST_SLIDES';
export const RECEIVE_SLIDES = 'RECEIVE_SLIDES';

function receiveSlides(slides, json) {
  return {
    type: RECEIVE_SLIDES,
    slides: json,
  };
};
  
function requestSlides(slides) {
  return {
    type: REQUEST_SLIDES,
    slides,
  };
};
  
function shouldFetchSlides(state) {
  const slides = state.slides;
  if (!slides) {
    return true;
  } else if (slides.isFetching) {
      return false;
  };
};
  
const fetchSlides = (slides) => (dispatch) => {
  dispatch(requestSlides(slides));
  return axios.get(`http://localhost:3001/slides`)
    .then(
      (json)=> { dispatch(receiveSlides(slides, json.data)) },
      (error)=>{ console.log(error)}
    );
};
  
export const fetchSlidesForSlider = (slides) => (dispatch, getState) => {
  if (shouldFetchSlides(getState())) {
    return dispatch(fetchSlides(slides));
  };
};