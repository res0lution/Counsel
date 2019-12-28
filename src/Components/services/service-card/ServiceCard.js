import React from 'react';
import {Card} from 'react-bootstrap';
import ServiceImg from '../../../images/background.jpg';

class ServiceCard extends React.Component {
  render() {
    return <Card className="border-0">
      <Card.Img variant="top" src={ServiceImg} width="370" height="190" />
        <Card.Body>
          <Card.Title className="text-uppercase font-weight-bold card-title">Financial planning</Card.Title>
          <Card.Text className="card-text">
            Effective financial planning will protect you now, and in the future, and prepare you for whatever lies ahead. 
            We take time to thoroughly understand your short, medium and long term goals and will develop a financial plan to 
            help you to achieve these.
          </Card.Text>
        </Card.Body>
      </Card>
  }
}

export default ServiceCard;