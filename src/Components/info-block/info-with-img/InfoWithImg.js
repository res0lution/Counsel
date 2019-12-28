import React from 'react';
import CounselImgExLg from '../../../images/office-workers.jpg';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { fetchInfoAboutRisks } from '../../../actions';
import propTypes from 'prop-types';

class InfoWithImg extends React.Component {
  constructor(props) {
    super(props)
    this.t = this.props.t;
  };

  componentDidMount() {
    const {dispatch, info} = this.props;
    dispatch(fetchInfoAboutRisks(info));
  }

  getRiskInfo() {
    let risks= [{
      title: '',
      subtitle: '',
      text: '',
    }];
    try {
      if(this.props.risks.risks !== undefined) {
        risks = this.props.risks.risks;
        return risks;
      }  
    } catch (error) {
    }
    return risks;
  }


  render() {
    const infoTitle = this.getRiskInfo()[0].title;
    const infoSubTitle = this.getRiskInfo()[0].subtitle;
    const infoText = this.getRiskInfo()[0].text;
    return <>
      <div>
        <div className="container info-wrapper">
          <div className="d-flex row pt-5 pb-5 position-relative">
            <div className="col-lg-6 col-12">
              <h3 className="text-uppercase font-weight-bold mb-4 info-title">{this.t(infoTitle)}</h3>
              <h4 className="text-secondary font-weight-regular mb-4 info-subtitle">{this.t(infoSubTitle)}</h4>
              <p className="mb-4 info-text">{this.t(infoText)}</p>
              <a className="text-uppercase font-weight-bold contact-link" href="3">{this.t("Take a tour")}</a>
            </div>
            <div className="col-lg-6 col-12 pt-lg-0 pt-5 d-flex justify-content-lg-end justify-content-center 
               img-wrapper ">
              <picture>
                <img className="shadow col-12 p-0 position-relative info-img" src={CounselImgExLg} alt="Counsel"/>
              </picture>
            </div>
          </div>
        </div>
      </div>
    </>
  }
}

InfoWithImg.propTypes = {
  infoAboutRisks: propTypes.object,
}

InfoWithImg.defaultProps = {
  infoAboutRisks: {risks: { risks: [{
    title: '',
    subtitle: '',
    text: '',
  }]}},
}

const mapStateToProps = (state) => {
  const {infoAboutRisks} = state;
  const {risks} = infoAboutRisks;
  return {
    risks,
  }
}

export default connect(mapStateToProps)(withTranslation()(InfoWithImg));