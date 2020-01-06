import React from 'react';
import Zoom from 'react-reveal/Zoom';
import Bounce from 'react-reveal/Bounce';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { fetchInfoForBlocks } from '../../actions/info.js';
import { openModal } from '../../actions/modal.js';
import propTypes from 'prop-types';
import '../../components/info-block/info-block.scss';

class InfoWithVideo extends React.Component {
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
      <section id="whywebest" className="container">
        { !isFetching &&
        (<div className=" d-flex pt-5 pb-5 row">
          <Zoom>
            <div className="col-lg-6 col-12 d-flex justify-content-lg-end justify-content-center video-wrapper">
              <iframe title="Counsel" className="shadow position-relative info-img" width="500" height="325" 
                src="https://www.youtube.com/embed/c2EW1xj_JBU" frameBorder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
              </iframe>
            </div>
          </Zoom>
          <Bounce right>
          <div className="col-lg-6 pt-lg-0 pt-5 col-12">
            <h3 className="text-uppercase font-weight-bold mb-4 info-title">{this.t(infoArr[2].title)}</h3>
            <h4 className="text-secondary font-weight-regular mb-4 info-subtitle">{this.t(infoArr[2].subtitle)}</h4>
            <p className="mb-4 info-text">{this.t(infoArr[2].text)}</p>
            <a className="text-uppercase font-weight-bold contact-link" onClick={this.handleShow} href="#modal">
              {this.t("our services")}
            </a>
          </div>
          </Bounce>
        </div>)}
      </section>
    </>
  }
}

InfoWithVideo.propTypes = {
  t: propTypes.func.isRequired,
  infoArr: propTypes.array.isRequired,
  isFetching: propTypes.bool.isRequired,
  dispatch: propTypes.func.isRequired
};

InfoWithVideo.defaultProps = {
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

export default connect(mapStateToProps)(withTranslation()(InfoWithVideo));