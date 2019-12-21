import React from 'react';
import {Card, CardDeck} from 'react-bootstrap';
import ServiceImg from '../../images/background.jpg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMapMarkedAlt, faMobileAlt, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import './contact.scss';

class Contact extends React.Component {
  render() {
    return <section className="container pb-5 pt-5 d-flex flex-column align-items-center">
      <h3 className="text-center text-uppercase font-weight-bold mb-4 services-title">Contact With Us</h3>
      <h4 className="text-center text-secondary mb-5 services-subtitle">Rapid solutions to the most complex business challenges with cooperative process-driven.</h4>
      <CardDeck>
        <ContactCard />
        <ContactCard />
        <ContactCard />
      </CardDeck>
    </section>
  }
}

export default Contact;

const ContactCard = () => {
  const pin = <FontAwesomeIcon className="mr-3 contact-text" icon={faMapMarkedAlt} />
  const phone = <FontAwesomeIcon className="mr-3 contact-text" icon={faMobileAlt}/>
  const mail = <FontAwesomeIcon className="mr-3 contact-text" icon={faEnvelope} />
  return <Card className="shadow border-0">
  <Card.Img variant="top" src={ServiceImg} width="370" height="240" />
    <Card.Body>
      <Card.Title className="text-uppercase font-weight-bold card-title mb-4">Head quarter</Card.Title>
      <Card.Text className="card-text">
        <div className="d-flex align-items-center mb-3">
          {pin}
          <span className="contact-text">14 Mao Road, N1 4EP, Los Angelos, USA</span>
        </div>
        <div className="d-flex align-items-center mb-3">
          {phone}
          <span className="contact-text">+445 6231 411</span>
        </div>
        <div className="d-flex align-items-center mb-3">
          {mail}
          <span className="contact-text">counsel@example.mail</span>
        </div>
      </Card.Text>
    </Card.Body>
  </Card>
}