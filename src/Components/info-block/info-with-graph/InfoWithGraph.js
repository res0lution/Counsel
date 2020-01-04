import React from 'react';
import Graph from './Graph.js';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { fetchInfoForBlocks } from '../../../actions/info.js';
import { openModal } from '../../../actions/modal.js';
import propTypes from 'prop-types';
import Bounce from 'react-reveal/Bounce';

class InfoWithGraph extends React.Component {
  constructor(props) {
    super(props)
    this.t = this.props.t;
    this.handleShow = this.handleShow.bind(this);
  };

  componentDidMount() {
    const {dispatch, info} = this.props;
    dispatch(fetchInfoForBlocks(info));
  };

  componentDidUpdate(prevProps) {
    if (this.props.info !== prevProps.info) {
      const { dispatch, info } = this.props;
      dispatch(fetchInfoForBlocks(info));
    };
  };

  handleShow() {
    const {dispatch, show} = this.props;
    dispatch(openModal(show));
  };

  render() {
    const {infoArr, isFetching } = this.props;

    return <>
      <div className="container">
        {!isFetching &&
        (<div className="row d-flex pt-5 pb-5 justify-content-md-center">
          <div className="col-xl-6 col-lg-7 col-md-12 d-flex position-relative">
            <Bounce left>
              <Graph />
            </Bounce>
          </div>
          <div className="col-xl-6 col-lg-4 col-md-12 pt-lg-0 pt-5">
            <Bounce right>
              <h3 className="text-uppercase font-weight-bold mb-4 info-title">{this.t(infoArr[1].title)}</h3>
              <h4 className="text-secondary font-weight-regular mb-4 info-subtitle">{this.t(infoArr[1].subtitle)}</h4>
              <p className="mb-4 info-text">{this.t(infoArr[1].text)}</p>
              <a className="text-uppercase font-weight-bold contact-link" onClick={this.handleShow} href="#modal">
                {this.t('Take a tour')}
              </a>
            </Bounce>
          </div>
        </div>)}
      </div>
    </>
  };
};

InfoWithGraph.propTypes = {
  t: propTypes.func.isRequired,
  infoArr: propTypes.array.isRequired,
  isFetching: propTypes.bool.isRequired,
  dispatch: propTypes.func.isRequired
};

InfoWithGraph.defaultProps = {
  isFetching: true,
};

const mapStateToProps = (state) => {
  const {infoForBlocks} = state;
  const {info} = infoForBlocks;
  const {isFetching, items: infoArr} = info || {isFetching: true, items: []};
  return {
    infoArr,
    isFetching
  };
};

export default connect(mapStateToProps)(withTranslation()(InfoWithGraph));