import React from 'react';
import ServiceCard from './service-card/ServiceCard.js'
import {CardDeck} from 'react-bootstrap';
import './services.scss';

class Services extends React.Component {
  render() {
    return <section id="services" className="container pb-5 pt-5 d-flex flex-column align-items-center">
      <h3 className="text-center text-uppercase font-weight-bold mb-4 services-title">Popular services</h3>
      <h4 className="text-center text-secondary mb-5 services-subtitle">Rapid solutions to the most complex business challenges with cooperative process-driven.</h4>
      <CardDeck>
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </CardDeck>
    </section>
  }
}

export default Services;