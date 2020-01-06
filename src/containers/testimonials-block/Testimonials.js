import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { fetchReviewsForTestimonials } from '../../actions/reviews.js';
import propTypes from 'prop-types';
import './testimonials.scss';

class Testimonials extends React.Component {
  constructor(props) {
    super(props)
    this.t = this.props.t;
  };

  componentDidMount() {
    const {dispatch, reviews} = this.props;
    dispatch(fetchReviewsForTestimonials(reviews));
  };

  componentDidUpdate(prevProps) {
    if (this.props.reviews !== prevProps.reviews) {
      const { dispatch, reviews } = this.props;
      dispatch(fetchReviewsForTestimonials(reviews));
    };
  };

  render() {
    const {reviews, isFetching} = this.props;

    return <section id="testimonials" className="container-fluid mt-5 pb-5 pt-5 testimonials-block">
      <div className="container">
        {!isFetching &&
        (<Carousel indicators={false} fade={true} interval={5000} controls={false}>
          {reviews.map((item, index)=> {
            return <Carousel.Item key={index} className="d-flex justify-content-center">
            <FontAwesomeIcon className="text-white icon-quote position-relative" icon={faQuoteLeft} />
            <Carousel.Caption className="d-flex justify-content-center">
              <div className="text-center">
                <p className="testimonial-text">{this.t(item.text)}</p>
                <span className="text-uppercase position-relative font-weight-bold testimonial-author">{item.author}</span>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          })}
        </Carousel>)}
      </div>
    </section>
  };
};

Testimonials.propTypes = {
  t: propTypes.func.isRequired,
  reviews: propTypes.array.isRequired,
  isFetching: propTypes.bool.isRequired,
  dispatch: propTypes.func.isRequired
};

Testimonials.defaultProps = {
  isFetching: true,
};

const mapStateToProps = (state) => {
  const {reviewsForTestimonials} = state;
  const {dataReviews} = reviewsForTestimonials;
  const {isFetching, items: reviews} = dataReviews || {isFetching: true, items: []};
  return {
    reviews,
    isFetching
  };
};

export default connect(mapStateToProps)(withTranslation()(Testimonials));