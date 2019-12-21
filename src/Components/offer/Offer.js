import React from 'react';
import {Button} from 'react-bootstrap';
import './offer.scss';

class Offer extends React.Component {
  render() {
    return <>
      <section className="container-fluid mb-5 offer-block">
        <div className="container d-flex justify-content-between align-items-baseline p-3">
          <h4 className="text-white pt-1 offer-title">Looking for a First-Class Business Plan Consultant?</h4>
          <Button variant="warning" id="btn-offer" className="text-uppercase font-weight-bold btn-offer">Contact now</Button>
        </div>
      </section>
    </>
  }
}

export default Offer;