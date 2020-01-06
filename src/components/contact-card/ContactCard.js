import React from 'react';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkedAlt, faMobileAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import propTypes from 'prop-types';

const ContactCard = ({t, data}) => {
  const pin = <FontAwesomeIcon className="mr-3 contact-text" icon={faMapMarkedAlt} />
  const phone = <FontAwesomeIcon className="mr-3 contact-text" icon={faMobileAlt}/>
  const mail = <FontAwesomeIcon className="mr-3 contact-text" icon={faEnvelope} />
  return <Card className="shadow border-0">
    <iframe 
      src={data.mapsrc} 
      title="Map" width="100%" height="240" frameBorder="0" allowFullScreen>  
    </iframe>
    <Card.Body>
      <Card.Title className="text-uppercase font-weight-bold card-title mb-4">{t(data.name)}</Card.Title>
      <div className="card-text">
        <div className="d-flex align-items-center mb-3">
          {pin}
          <span className="contact-text">{data.address}</span>
        </div>
        <div className="d-flex align-items-center mb-3">
          {phone}
        <span className="contact-text">{data.phone}</span>
        </div>
        <div className="d-flex align-items-center mb-3">
          {mail}
          <span className="contact-text">{data.email}</span>
        </div>
      </div>
    </Card.Body>
  </Card>
};

ContactCard.propTypes = {
  t: propTypes.func.isRequired,
  data: propTypes.object.isRequired
}

export default ContactCard;