import React from 'react';
import { CardDeck } from 'react-bootstrap';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { fetchContactsForContact } from '../../actions/contacts.js';
import ContactCard from '../../components/contact-card/ContactCard.js';
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
      <h4 className="text-center text-secondary mb-5 services-subtitle">
        {this.t("And we`ll solve all your financial problems")}
      </h4>
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
  const {isFetching, items: contactsArr} = contactsForContact || {isFetching: true, items: []};
  return {
    contactsArr,
    isFetching
  };
};

export default connect(mapStateToProps)(withTranslation()(Contact));
