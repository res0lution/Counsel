import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faQuoteLeft} from '@fortawesome/free-solid-svg-icons';
import './testimonials.scss';

class Testimonials extends React.Component {
    render() {
      return <section id="testimonials" className="container-fluid mt-5 pb-5 pt-5 testimonials-block">
        <div className="container">
          <Carousel indicators={false} fade={true} interval={5000} controls={false}>
            <Carousel.Item className="d-flex justify-content-center">
              <FontAwesomeIcon className="text-white icon-quote position-relative" icon={faQuoteLeft} />
              <Carousel.Caption className="d-flex justify-content-center">
                <div className="text-center">
                  <p className="testimonial-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit
                    Seddo eiusmod tempor incididunt ut labore Standard Dummy aliqua. Utenim adminim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut Unknown Printer The Commodo consequat. 
                    Duis aute irure dolor.
                    Voluptate velit esse cillum dolore eu fugiat nullapariatur.</p>
                  <span className="text-uppercase position-relative font-weight-bold testimonial-author">SAM ISBISTER</span>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="d-flex justify-content-center">
              <FontAwesomeIcon className="text-white icon-quote position-relative" icon={faQuoteLeft} />
              <Carousel.Caption className="d-flex justify-content-center">
                <div className="text-center">
                  <p className="testimonial-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit
                    Seddo eiusmod tempor incididunt ut labore Standard Dummy aliqua. Utenim adminim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut Unknown Printer The Commodo consequat. 
                    Duis aute irure dolor.
                    Voluptate velit esse cillum dolore eu fugiat nullapariatur.</p>
                  <span className="text-uppercase position-relative font-weight-bold testimonial-author">SAM ISBISTER</span>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="d-flex justify-content-center">
              <FontAwesomeIcon className="text-white icon-quote position-relative" icon={faQuoteLeft} />
              <Carousel.Caption className="d-flex justify-content-center">
                <div className="text-center">
                  <p className="testimonial-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit
                    Seddo eiusmod tempor incididunt ut labore Standard Dummy aliqua. Utenim adminim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut Unknown Printer The Commodo consequat. 
                    Duis aute irure dolor.
                    Voluptate velit esse cillum dolore eu fugiat nullapariatur.</p>
                  <span className="text-uppercase position-relative font-weight-bold testimonial-author">SAM ISBISTER</span>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </section>
    }
}

export default Testimonials;