import React from 'react';
import CounselImg from '../../../images/background.jpg';

class InfoWithVideo extends React.Component {
  render() {
    return <>
      <div id="whywebest" className="container">
        <div className=" d-flex pt-5 pb-5">
          <div className="col-6 d-flex position-relative">
            <img className="shadow position-relative info-img" src={CounselImg} width="500" height="325" alt="Counsel"/>
          </div>
          <div className="col-6">
            <h3 className="text-uppercase font-weight-bold mb-4 info-title">Why we best Consulting office in london ?</h3>
            <h4 className="text-secondary font-weight-regular mb-4 info-subtitle">Rapid solutions to the most complex business 
              challenges with cooperative process-driven.</h4>
            <p className="mb-4 info-text">Integer blandit ultricies aliquam. Pellentesque quis dui varius, dapibus velit id, 
              iaculis ipsum. Morbi ac eros feugiat, lacinia elit ut, elem turpis.Curabitur justo sapien, tempus sit amet rutrum 
              eu, commodo eu lacus. Morbi in ligula nibh. Maecenas ut mi at odio hendrerit eleifend tempor. justo sapien, 
              tempus sit amet rutrum eu, commodo eu lacus. Morbi in ligula nibh. Maecenas ut mi at odio hendrerit eleifend 
              tempor.</p>
            <a className="text-uppercase font-weight-bold contact-link" href="3">Our services</a>
          </div>
        </div>
      </div>
    </>
  }
}

export default InfoWithVideo;