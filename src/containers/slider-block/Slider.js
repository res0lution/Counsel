import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight, faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { fetchSlidesForSlider } from '../../actions/slides.js';
import { openModal } from '../../actions/modal.js';
import propTypes from 'prop-types';
import './slider.scss';

class Slider extends React.Component {
  constructor(props) {
    super(props)
    this.t = this.props.t;
    this.handleShow = this.handleShow.bind(this);
  };

  componentDidMount() {
    const {dispatch, slides} = this.props;
    dispatch(fetchSlidesForSlider(slides));
  };

  componentDidUpdate(prevProps) {
    if (this.props.slides !== prevProps.slides) {
      const { dispatch, slides } = this.props;
      dispatch(fetchSlidesForSlider(slides));
    };
  };

  handleShow() {
    const {dispatch, show} = this.props;
    dispatch(openModal(show));
  };

  render() {

    const btnNext = <FontAwesomeIcon id="next" className="poition-relative" icon={faLongArrowAltRight} />;
    const btnPrev = <FontAwesomeIcon id="prev" className="poition-relative" icon={faLongArrowAltLeft} />;
    const {slidesArr, isFetching } = this.props;

    return <section className="container-fluid position-relative slider-block">
      <div className="container d-flex flex-column">
        <Carousel indicators={false} interval={null} nextIcon={btnNext} prevIcon={btnPrev}>
          <Carousel.Item className="pb-5">
            {!isFetching &&
            (<Carousel.Caption className="d-flex justify-content-end justify-md-content-center pb-5">
              <div className="col-lg-4 col-md-8 text-right pb-5 mr-lg-5 position-relative slide-content first-slide-content">
                <h2 className="text-capitalize position-relative slide-title first-slide-title">{slidesArr[0].title}</h2>
                <a className="text-uppercase font-weight-bold slide-link" href="#3" onClick={this.handleShow}>
                  {this.t("Learn more")}
                </a>
              </div>
            </Carousel.Caption>)}
          </Carousel.Item>
          <Carousel.Item className="pb-5">
            {!isFetching &&
            (<Carousel.Caption className="d-flex pb-5 caption-second">
              <div className="col-lg-8 col-md-12 pb-5 text-left d-flex position-relative slide-content second-slide-content">
                <div>
                  <h2 className="text-capitalize position-relative slide-title">
                    {this.t(slidesArr[1].title)}
                  </h2>
                  <p className="text-uppercase font-weight-bold slide-text">
                    {this.t(slidesArr[1].text)}
                  </p>
                </div>
                <div id="cube-loader" className="position-relative">
                <div className="caption">
                  <div className="cube-loader">
                    <div className="cube loader-1"></div>
                    <div className="cube loader-2"></div>
                    <div className="cube loader-4"></div>
                    <div className="cube loader-3"></div>
                  </div>
                  </div>
                </div>
              </div>
            </Carousel.Caption>)}
          </Carousel.Item>  
          <Carousel.Item className="pb-5">
            {!isFetching &&
            (<Carousel.Caption className="d-flex justify-content-end pb-5 caption-second">
              <div className="col-lg-6 col-md-10 col-12 text-right pb-5 mr-md-5 m-0 position-relative slide-content">
                <div className="sk-rotating-plane position-relative"></div>
                <h2 className="text-capitalize position-relative slide-title">
                  {this.t(slidesArr[2].title)}
                </h2>
                <p className="text-uppercase font-weight-bold slide-text">
                  {this.t(slidesArr[2].text)}
                </p>
              </div>
            </Carousel.Caption>)}
          </Carousel.Item>    
        </Carousel>
      </div>
    </section>
  };
};

Slider.propTypes = {
  t: propTypes.func.isRequired,
  slidesArr: propTypes.array.isRequired,
  isFetching: propTypes.bool.isRequired,
  dispatch: propTypes.func.isRequired,
  show: propTypes.bool.isRequired
};

Slider.defaultProps = {
  isFetching: true,
  show: false
};

const mapStateToProps = (state) => {
  const {slidesForSlider, stateModal} = state;
  const {slides} = slidesForSlider;
  const {show} = stateModal;
  const {isFetching, items: slidesArr} = slides || {isFetching: true, items: []};
  return {
    slidesArr,
    isFetching,
    show
  };
};

export default connect(mapStateToProps)(withTranslation()(Slider));