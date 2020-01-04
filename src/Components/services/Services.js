import React from 'react';
import ServiceCard from './ServiceCard.js'
import {CardDeck} from 'react-bootstrap';
import { withTranslation } from 'react-i18next';
import ServiceImg1 from '../../images/woman.jpg';
import ServiceImg1small from '../../images/woman-small.jpg';
import ServiceImg2 from '../../images/deal.png';
import ServiceImg2small from '../../images/deal-small.jpg';
import ServiceImg3 from '../../images/laptop-worker.jpg';
import ServiceImg3small from '../../images/laptop-worker-small.jpg';
import { connect } from 'react-redux';
import { fetchDataForServices } from '../../actions/services.js';
import propTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import './services.scss';

class Services extends React.Component {
  constructor(props) {
    super(props)
    this.t = this.props.t;
  };

  componentDidMount() {
    const {dispatch, data} = this.props;
    dispatch(fetchDataForServices(data));
  };

  componentDidUpdate(prevProps) {
    if (this.props.data !== prevProps.data) {
      const { dispatch, data } = this.props;
      dispatch(fetchDataForServices(data));
    };
  };

  render() {
    const { dataArr, isFetching } = this.props;
    const imgsArr = [
      {
        big: ServiceImg1,
        small: ServiceImg1small
      },
      {
        big: ServiceImg2,
        small: ServiceImg2small
      },
      {
        big: ServiceImg3,
        small: ServiceImg3small
      },
    ];

    const cardList = dataArr.map((item, index) => <ServiceCard key={index} t={this.t} info={item} imgs={imgsArr[index]}/>)

    return <section id="services" className="container pb-5 pt-5 d-flex flex-column align-items-center">
      <h3 className="text-center text-uppercase font-weight-bold mb-4 services-title">{this.t("Popular services")}</h3>
      <h4 className="text-center text-secondary mb-5 services-subtitle">{this.t("Our services can help you to solve all your business problems")}</h4>
      <Fade bottom>
        { !isFetching &&
        (<CardDeck>
          {cardList}
        </CardDeck>)}
      </Fade>
    </section>
  };
};

Services.propTypes = {
  t: propTypes.func.isRequired,
  dataArr: propTypes.array.isRequired,
  isFetching: propTypes.bool.isRequired,
  dispatch: propTypes.func.isRequired
};

Services.defaultProps = {
  isFetching: true,
};

const mapStateToProps = (state) => {
  const {dataForServices} = state;
  const {services} = dataForServices;
  const {isFetching, items: dataArr} = services|| {isFetching: true, items: []};
  return {
    dataArr,
    isFetching
  };
};

export default connect(mapStateToProps)(withTranslation()(Services));