import React from 'react';
import {Nav, NavDropdown, Navbar} from 'react-bootstrap';
import EngLang from '../../images/english.png';
import RusLang from '../../images/russian.png'
import { withTranslation } from 'react-i18next';
import propTypes from 'prop-types';
import './header.scss';

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.t = this.props.t;
    this.i18n = this.props.i18n;
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      lng: 'en',
    };
  };

  handleClick(lang) {
    if(lang === this.state.lang) {
      return;
    };

    if(lang === 'en') {
      this.i18n.changeLanguage('en');
      this.setState(state => ({lng: 'en'}));
    } else {
      this.i18n.changeLanguage('ru');
      this.setState(state => ({lng: 'ru'}));
    };
  };

  render() {
    const chosenLang = <img className="rounded-circle" src={this.state.lng === 'en' ? EngLang : RusLang} 
      width="22" height="22" alt="English"/>;

    return <header className="container-fluid header-wrapper pb-2">
      <div className="container">
        <Navbar expand="lg">
          <Navbar.Brand className="text-capitalize font-weight-bold d-flex flex-column header-logo" href="#top">
            <span className="text-center text-second-theme text-logo d-flex">Counsel</span>
            <span className="text-white text-uppercase text-logo-small mt-n2">{this.t("own your course")}</span>
          </Navbar.Brand>
          <Navbar.Toggle className="border-white bg-white" aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto text-uppercase text-links pt-2 d-flex align-items-center">
              <Nav.Link className="text-white" href="#about">{this.t("About")}</Nav.Link>
              <Nav.Link className="text-white" href="#services">{this.t("Services")}</Nav.Link>
              <Nav.Link className="text-white" href="#whywebest">{this.t("Why we best")}</Nav.Link>
              <Nav.Link className="text-white" href="#testimonials">{this.t("Testimonials")}</Nav.Link>
              <Nav.Link className="text-white" href="#contact">{this.t("Contact")}</Nav.Link>
              <NavDropdown className="text-capitalize" menuRole="menu" title={chosenLang} id="basic-nav-dropdown" alignRight>
                <NavDropdown.Item id="en-lang" className="d-flex align-items-center" 
                  onClick={(e) => this.handleClick('en', e)} href="#">
                  <img className="mr-2" src={EngLang} width="22" height="22" alt="English"/>
                  English
                </NavDropdown.Item>
                <NavDropdown.Item id="ru-lang" className="d-flex align-items-center" 
                  onClick={(e) => this.handleClick('ru', e)} href="#">
                  <img className="mr-2" src={RusLang} width="22" height="22" alt="Russian"/>
                  Русский
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </header>
  };
};

Header.propTypes = {
  t: propTypes.func.isRequired,
  i18n: propTypes.object.isRequired,
};

export default withTranslation()(Header);