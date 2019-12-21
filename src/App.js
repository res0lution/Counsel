import React from 'react';
import Header from './Components/header/Header.js';
import Slider from './Components/slider/Slider.js';
import InfoBlock from './Components/info-block/InfoBlock.js';
import Offer from './Components/offer/Offer.js';
import Services from './Components/services/Services.js';
import Statistics from './Components/statistics/Statistics.js';
import InfoWithVideo from './Components/info-block/info-with-video/InfoWithVideo.js';
import Testimonials from './Components/testimonials/Testimonials.js';
import Contact from './Components/contact/Contact.js';
import Footer from './Components/footer/Footer.js';
import './sass/main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <div className="position-relative top-section-wrapper">
        <Header />
        <Slider />
      </div>
      <main className="position-relative main-content">
        <InfoBlock />
        <Offer />
        <Services />
        <Statistics />
        <div className="position-relative pt-5 video-wrapper">
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
