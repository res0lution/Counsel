import React from 'react';
import {Card} from 'react-bootstrap';
import ServiceImg from '../../../images/background.jpg';

class ServiceCard extends React.Component {
  render() {
    return <Card className="border-0">
      <Card.Img variant="top" src={ServiceImg} width="370" height="190" />
        <Card.Body>
          <Card.Title className="text-uppercase font-weight-bold card-title">Turnaround Consulting</Card.Title>
          <Card.Text className="card-text">
            Companies dislike the term ‘turnaround consulting’ because it represents failure. 
            The truth is that turnaround consulting represents success.
          </Card.Text>
        </Card.Body>
      </Card>
  }
}

export default ServiceCard;