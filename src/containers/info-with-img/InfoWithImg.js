import React from 'react';
import CounselImgExLg from '../../images/office-workers.jpg';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { fetchInfoForBlocks } from '../../actions/info.js';
import { openModal } from '../../actions/modal.js';
import propTypes from 'prop-types';
import Fade from 'react-reveal/Fade';

class InfoWithImg extends React.Component {
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
      <div>
        {!isFetching &&
        (<Fade bottom>
        <div className="container">
          <div className="d-flex row pt-5 pb-5 position-relative">
            <div className="col-lg-6 col-12">
              <h3 className="text-uppercase font-weight-bold mb-4 info-title">{this.t(infoArr[0].title)}</h3>
              <h4 className="text-secondary font-weight-regular mb-4 info-subtitle">{this.t(infoArr[0].subtitle)}</h4>
              <p className="mb-4 info-text">{this.t(infoArr[0].text)}</p>
              <a className="text-uppercase font-weight-bold contact-link" onClick={this.handleShow} href="#modal">
                {this.t("Take a tour")}
              </a>
            </div>
            <div className="col-lg-6 col-12 pt-lg-0 pt-5 d-flex justify-content-lg-end justify-content-center 
               img-wrapper">
              <picture>
                <img className="shadow col-12 p-0 position-relative info-img" src={CounselImgExLg} alt="Counsel"/>
              </picture>
            </div>
          </div>
        </div>
        </Fade>)}
      </div>
    </>
  };
};

InfoWithImg.propTypes = {
  t: propTypes.func.isRequired,
  infoArr: propTypes.array.isRequired,
  isFetching: propTypes.bool.isRequired,
  dispatch: propTypes.func.isRequired
};

InfoWithImg.defaultProps = {
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

export default connect(mapStateToProps)(withTranslation()(InfoWithImg));