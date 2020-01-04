import React from 'react';
import {Card, CardDeck} from 'react-bootstrap';
import { withTranslation } from 'react-i18next';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMapMarkedAlt, faMobileAlt, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { fetchContactsForContact } from '../../actions/contacts.js';
import propTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import './contact.scss';

class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.t = this.props.t;
  };

  componentDidMount() {
    const {dispatch, contacts} = this.props;
    dispatch(fetchContactsForContact(contacts));
  };

  componentDidUpdate(prevProps) {
    if (this.props.contacts !== prevProps.contacts) {
      const { dispatch, contacts } = this.props;
      dispatch(fetchContactsForContact(contacts));
    };
  };

  render() {
    const {isFetching, contactsArr} = this.props;

    return <section id="contact" className="container pb-5 pt-5 d-flex flex-column align-items-center">
      <h3 className="text-center text-uppercase font-weight-bold mb-4 services-title">{this.t("Contact With Us")}</h3>
      <h4 className="text-center text-secondary mb-5 services-subtitle">{this.t("And we`ll solve all your financial problems")}</h4>
      {!isFetching &&
      (<Fade bottom>
        <CardDeck>
          {contactsArr.map((item, index)=> <ContactCard key={index} t={this.t} data={item}/> )}
        </CardDeck>
      </Fade>)}
    </section>
  };
};

Contact.propTypes = {
  t: propTypes.func.isRequired,
  contactsArr: propTypes.array.isRequired,
  isFetching: propTypes.bool.isRequired,
  dispatch: propTypes.func.isRequired
}

Contact.defaultProps = {
  isFetching: true,
}

const mapStateToProps = (state) => {
  const {contactsForContact} = state;
  const {dataContacts} = contactsForContact;
  const {isFetching, items: contactsArr} = dataContacts || {isFetching: true, items: []};
  return {
    contactsArr,
    isFetching
  };
};

export default connect(mapStateToProps)(withTranslation()(Contact));

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