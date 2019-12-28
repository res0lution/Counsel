import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLongArrowAltRight, faLongArrowAltLeft} from '@fortawesome/free-solid-svg-icons';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { fetchSlidesIfNeed } from '../../actions';
import propTypes from 'prop-types';
import './slider.scss';

class Slider extends React.Component {
  constructor(props) {
    super(props)
    this.t = this.props.t;
  };

  componentDidMount() {
    const {dispatch, slides} = this.props;
    dispatch(fetchSlidesIfNeed(slides));
  }

  getSlideInfo() {
    let slides= [{title: "", text: ""}, {title: "", text: ""}, {title: "", text: ""}];
    try {
      if (this.props.stateSlider.slides !== undefined) {
        slides = this.props.stateSlider.slides;
        return slides;
      }  
    } catch (error) {
    }
    return slides;
  }

  render() {

    const btnNext = <FontAwesomeIcon id="next" className="poition-relative" icon={faLongArrowAltRight} />;
    const btnPrev = <FontAwesomeIcon id="prev" className="poition-relative" icon={faLongArrowAltLeft} />;
    const firstSlide = this.getSlideInfo()[0];
    const secodSlide = this.getSlideInfo()[1];
    const thirdSlide = this.getSlideInfo()[2];

    return <section className="container-fluid position-relative slider-block">
      <div className="container d-flex flex-column">
        <Carousel indicators={false} interval={null} nextIcon={btnNext} prevIcon={btnPrev}>
          <Carousel.Item className="pb-5">
            <Carousel.Caption className="d-flex justify-content-end justify-md-content-center pb-5">
              <div className="col-lg-4 col-md-8 text-right pb-5 mr-lg-5 position-relative slide-content first-slide-content">
                <h2 className="text-capitalize position-relative slide-title first-slide-title">{firstSlide.title}</h2>
                <a className="text-uppercase font-weight-bold slide-link" href="#3">{this.t("Learn more")}</a>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="pb-5">
            <Carousel.Caption className="d-flex pb-5 caption-second">
              <div className="col-lg-8 col-md-12 pb-5 text-left d-flex position-relative slide-content second-slide-content">
                <div>
                  <h2 className="text-capitalize position-relative slide-title">
                    {this.t(secodSlide.title)}
                  </h2>
                  <p className="text-uppercase font-weight-bold slide-text">
                    {this.t(secodSlide.text)}
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
            </Carousel.Caption>
          </Carousel.Item>  
          <Carousel.Item className="pb-5">
            <Carousel.Caption className="d-flex justify-content-end pb-5 caption-second">
              <div className="col-lg-6 col-md-10 col-12 text-right pb-5 mr-md-5 m-0 position-relative slide-content">
                <div className="sk-rotating-plane position-relative"></div>
                <h2 className="text-capitalize position-relative slide-title">
                  {this.t(thirdSlide.title)}
                </h2>
                <p className="text-uppercase font-weight-bold slide-text">
                  {this.t(thirdSlide.text)}
                </p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>    
        </Carousel>
      </div>
    </section>
  }
}

Slider.propTypes = {
  t: propTypes.func.isRequired,
}

Slider.defaultProps = {
}

const mapStateToProps = (state) => {
  const {stateSlider} = state;
  const {slides} = stateSlider;
  return {
    slides,
  }
}

export default connect(mapStateToProps)(withTranslation()(Slider));