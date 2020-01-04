import React from 'react';
import {Card} from 'react-bootstrap';
import propTypes from 'prop-types';

function ServiceCard({t, info, imgs}) {
  return <Card className="border-0">
    <picture>
      <source srcSet= {imgs.big} media="(max-width: 572px)" />
      <source srcSet= {imgs.small} media="(max-width: 992px)" />
      <img className="card-img-top img-service" src={imgs.big} alt="Service"/>
    </picture>
    <Card.Body>
      <Card.Title className="text-uppercase font-weight-bold card-title">{t(info.title)}</Card.Title>
      <Card.Text className="card-text">
        {t(info.text)}
      </Card.Text>
    </Card.Body>
  </Card>
};

ServiceCard.propTypes = {
  t: propTypes.func.isRequired,
  info: propTypes.object.isRequired,
};

ServiceCard.defaultProps = {
  info: { text: '', title: ''},
};

export default ServiceCard;