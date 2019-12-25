import axios from 'axios';

export const REQUEST_SLIDES = 'REQUEST_SLIDES';
export const RECEIVE_SLIDES = 'RECEIVE_SLIDES';

function requestSlides(slides) {
  return {
    type: REQUEST_SLIDES,
    slides
  };
};

function receiveSlides(slides, json) {
  return {
    type: RECEIVE_SLIDES,
    slides: json,
  };
};

const fetchSlides = (slides) => (dispatch) => {
  dispatch(requestSlides(slides));
  return axios.get(`http://localhost:3001/slides`)
    .then(
      (json)=> { dispatch(receiveSlides(slides, json.data)) },
      (error)=>{ console.log(error)}
    )
};

function shouldFetchSlides(state, slides) {
  const check = state.slidesForSlider[slides];
  if (!check) {
    return true
  } else if (check.isFetching) {
    return false
  } else {
    return check.didInvalidate
  }
}

export const fetchSlidesIfNeed = (slides) => (dispatch, getState) => {
  if(shouldFetchSlides(getState(), slides)) {
    return dispatch(fetchSlides(slides))
  } else {
    Promise.resolve();
  }
}

