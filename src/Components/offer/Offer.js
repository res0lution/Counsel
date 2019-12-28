import React from 'react';
import {Button} from 'react-bootstrap';
import { withTranslation } from 'react-i18next';
import './offer.scss';

class Offer extends React.Component {
  constructor(props) {
    super(props)
    this.t = this.props.t;
  };

  render() {
    return <>
      <section className="container-fluid mb-5 offer-block">
        <div className="container d-flex justify-content-between align-items-center p-3">
          <h4 className="text-white pt-1 offer-title">{this.t("Looking for a First-Class Business Plan Consultant?")}</h4>
          <Button variant="warning" id="btn-offer" className="text-uppercase font-weight-bold btn-offer">
            {this.t('Contact now')}
          </Button>
        </div>
      </section>
    </>
  }
}

export default withTranslation()(Offer);