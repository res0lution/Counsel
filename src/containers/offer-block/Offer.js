import React from 'react';
import {Button} from 'react-bootstrap';
import { withTranslation } from 'react-i18next';
import { openModal } from '../../actions/modal.js';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import './offer.scss';

class Offer extends React.Component {
  constructor(props) {
    super(props)
    this.t = this.props.t;
    this.handleShow = this.handleShow.bind(this);
  };

  handleShow() {
    const {dispatch, show} = this.props;
    dispatch(openModal(show));
  };

  render() {
    return <>
      <section className="container-fluid mb-5 offer-block">
        <Fade bottom>
          <div className="container d-flex justify-content-between align-items-center p-3">
            <h4 className="text-white pt-1 offer-title">{this.t("Looking for a First-Class Business Plan Consultant?")}</h4>
            <Button variant="warning" id="btn-offer" onClick={this.handleShow} 
              className="text-uppercase font-weight-bold btn-offer">
              {this.t('Contact now')}
            </Button>
          </div>
        </Fade>
      </section>
    </>
  };
};

Offer.propTypes = {
  t: propTypes.func.isRequired,
  dispatch: propTypes.func.isRequired,
};

export default connect()(withTranslation()(Offer));