import React from 'react';
import InfoWithImg from './info-with-img/InfoWithImg.js';
import InfoWithGraph from './info-with-graph/InfoWithGraph.js'
import './info-block.scss';

class InfoBlock extends React.Component {
  render() {
    return <section>
      <div className="container-fluid info-block pt-5 pb-5">
        <InfoWithImg />
      </div>
      <div className="container-fluid info-block pt-5 pb-5 bg-light">
        <InfoWithGraph />
      </div>
    </section>
  }
}

export default InfoBlock;