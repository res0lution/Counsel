import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLongArrowAltRight, faLongArrowAltLeft} from '@fortawesome/free-solid-svg-icons';
import './slider.scss';

class Slider extends React.Component {
    render() {
      const btnNext = <FontAwesomeIcon id="next" className="poition-relative" icon={faLongArrowAltRight} />;
      const btnPrev = <FontAwesomeIcon id="prev" className="poition-relative" icon={faLongArrowAltLeft} />;
      return <section className="container-fluid position-relative slider-block">
        <div className="container d-flex flex-column">
          <Carousel indicators={false} interval={null} nextIcon={btnNext} prevIcon={btnPrev}>
            <Carousel.Item className="pb-5">
              <Carousel.Caption className="d-flex justify-content-end pb-5">
                <div className="col-4 text-right pb-5 mr-5 position-relative slide-content">
                  <h2 className="text-capitalize position-relative slide-title first-slide">Consumer products consulting</h2>
                  <a className="text-uppercase font-weight-bold slide-link" href="3">Learn more</a>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="pb-5">
              <Carousel.Caption className="d-flex justify-content-end pb-5">
                <div className="col-4 text-right pb-5 mr-5 position-relative slide-content">
                  <h2 className="text-capitalize position-relative slide-title first-slide">Consumer products consulting</h2>
                  <a className="text-uppercase font-weight-bold slide-link" href="3">Learn more</a>
                </div>
              </Carousel.Caption>
            </Carousel.Item>  
            <Carousel.Item className="pb-5">
              <Carousel.Caption className="d-flex justify-content-end pb-5">
                <div className="col-4 text-right pb-5 mr-5 position-relative slide-content">
                  <h2 className="text-capitalize position-relative slide-title first-slide">Consumer products consulting</h2>
                  <a className="text-uppercase font-weight-bold slide-link" href="3">Learn more</a>
                </div>
              </Carousel.Caption>
            </Carousel.Item>    
          </Carousel>
        </div>
      </section>
    }
}

export default Slider;