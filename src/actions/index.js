import axios from 'axios';

export const REQUEST_RISKS = 'REQUEST_RISKS';
export const RECEIVE_RISKS = 'RECEIVE_RISKS';

export const REQUEST_SLIDES = 'REQUEST_SLIDES';
const requestSlides = (slides) => {
  return {
    type: REQUEST_SLIDES,
    slides,
  };
};

export const RECEIVE_SLIDES = 'RECEIVE_SLIDES';
const receiveSlides = (slides, json) => {
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

const shouldFetchSlides = (state, slides) => {
  const checkSlides = state.stateSlider.slides;
  if (!checkSlides) {
    return true;
  } else if (checkSlides.isFetching) {
    return false;
  };
}

function requestRisks(info) {
  return {
    type: REQUEST_RISKS,
    info,
  };
};

function receiveRisks(info, json) {
  return {
    type: RECEIVE_RISKS,
    info: json,
  };
};

const fetchRisks = (info) => (dispatch) => {
  dispatch(requestRisks(info));
  return axios.get(`http://localhost:3001/risks`)
    .then(
      (json)=> { dispatch(receiveRisks(info, json.data)) },
      (error)=>{ console.log(error)}
    )
};


export const fetchSlidesIfNeed = (slides) => (dispatch, getState) => {
  if(shouldFetchSlides(getState(), slides)) {
    return dispatch(fetchSlides(slides));
  } else {
    Promise.resolve();
  }
}

export const fetchInfoAboutRisks = (info) => (dispatch) => {
    return dispatch(fetchRisks(info));
}

