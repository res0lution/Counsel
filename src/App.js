import React from 'react';
import Header from './components/header-block/Header.js';
import Slider from './containers/slider-block/Slider.js';
import InfoBlock from './components/info-block/InfoBlock.js';
import Offer from './containers/offer-block/Offer.js';
import Services from './containers/services-block/Services.js';
import Statistics from './containers/statistics-block/Statistics.js';
import InfoWithVideo from './containers/info-with-video/InfoWithVideo.js';
import Testimonials from './containers/testimonials-block/Testimonials.js';
import Contact from './containers/contact-block/Contact.js';
import Footer from './components/footer-block/Footer.js';
import ModalForm from './containers/modal-block/Modal.js';
import './sass/main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <div className="position-relative top-section-wrapper">
        <Header />
        <Slider />
      </div>
      <ModalForm />
      <main className="position-relative main-content">
        <InfoBlock />
        <Offer />
        <Services />
        <Statistics />
        <div className="position-relative pt-5">
          <InfoWithVideo />
        </div>
          <Testimonials />
          <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
