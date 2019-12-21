import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebook, faYoutube, faGooglePlus, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './footer.scss';

const Footer = () => {
  return <footer className="footer-block">
    <div className="container d-flex align-items-center justify-content-between pb-2 pt-4">
      <p className="text-white">Copyright © <span className="firm-name">Symu.co</span></p>
      <ul className="list-unstyled d-flex">
        <li><a href="3"><FontAwesomeIcon className="text-white ml-3" icon={faFacebook}/></a></li>
        <li><a href="3"><FontAwesomeIcon className="text-white ml-3" icon={faYoutube}/></a></li>
        <li><a href="3"><FontAwesomeIcon className="text-white ml-3" icon={faGooglePlus}/></a></li>
        <li><a href="3"><FontAwesomeIcon className="text-white ml-3" icon={faInstagram}/></a></li>
      </ul>
    </div>
  </footer>
}

export default Footer;