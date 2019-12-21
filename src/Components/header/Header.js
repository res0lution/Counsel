import React from 'react';
import {Nav, NavDropdown, Navbar} from 'react-bootstrap';
import EngLang from '../../images/english.png';
import './header.scss';

class Header extends React.Component {
  render() {
    const imgEng = <img className="rounded-circle" src={EngLang} width="31" height="31" alt="English"/>;

    return <header className="container-fluid header-wrapper position-fixed pb-2">
      <div className="container">
        <Navbar expand="lg">
          <Navbar.Brand className="text-capitalize font-weight-bold d-flex flex-column" href="#home">
            <span className="text-center text-second-theme text-logo d-flex">Counsel</span>
            <span className="text-white text-uppercase text-logo-small mt-n2">own your course</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto text-uppercase text-links pt-2 d-flex align-items-center">
              <Nav.Link className="text-white" href="#about">About</Nav.Link>
              <Nav.Link className="text-white" href="#services">Services</Nav.Link>
              <Nav.Link className="text-white" href="#whywebest">Why we best</Nav.Link>
              <Nav.Link className="text-white" href="#testimonials">Testimonials</Nav.Link>
              <Nav.Link className="text-white" href="#contact">Contact</Nav.Link>
              <NavDropdown className="text-capitalize" title={imgEng} id="basic-nav-dropdown" alignRight>
                <NavDropdown.Item href="#">
                  <img src={EngLang} width="31" height="31" alt="English"/>
                  English
                </NavDropdown.Item>
                <NavDropdown.Item href="#">
                  <img src={EngLang} width="31" height="31" alt="Russian"/>
                  Russian
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </header>
  }
}

export default Header;