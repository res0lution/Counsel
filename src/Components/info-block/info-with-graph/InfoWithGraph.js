import React from 'react';
import Graph from './Graph.js';
import { withTranslation } from 'react-i18next';

class InfoWithGraph extends React.Component {
  constructor(props) {
    super(props)
    this.t = this.props.t;
  };

  render() {
    return <>
      <div className="container">
        <div className="row d-flex pt-5 pb-5 justify-content-md-center">
          <div className="col-xl-6 col-lg-7 col-md-12 d-flex position-relative">
            <Graph />
          </div>
          <div className="col-xl-6 col-lg-4 col-md-12 pt-lg-0 pt-5">
            <h3 className="text-uppercase font-weight-bold mb-4 info-title">{this.t("Helping you to grow your wealth")}</h3>
            <h4 className="text-secondary font-weight-regular mb-4 info-subtitle">{this.t("Our approach means that you no longer need to ‘chop and change’ traditional investments when performance inevitably ‘dips’ every few years.")}</h4>
            <p className="mb-4 info-text">{this.t(`Whether you are new to investments or want to re-evaluate your existing mix, we can help. Our expert advisers will develop a personal investment portfolio with a risk level that reflects your financial ambitions. Your portfolio can be created using current available cash or by transferring assets currently held in other tax wrappers such as pensions and ISAs. We always ensure that you continue to receive the existing beneficial tax treatment, or enhance it by innovative financial planning ideas.Your financial plan is like your travel itinerary. It factors in where you want to get to and the places you want to visit along the way. Our job is to help you reach each destination at the right time in your life.`)}</p>
            <a className="text-uppercase font-weight-bold contact-link" href="3">{this.t('Take a tour')}</a>
          </div>
        </div>
      </div>
    </>
  }
}

export default withTranslation()(InfoWithGraph);