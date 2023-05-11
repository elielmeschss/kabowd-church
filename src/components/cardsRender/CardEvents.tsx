import React from "react";
import { Card } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import './style.scss'

interface EventsProps {
  title: string;
  text: string;
  img: string;
  link: string;
  day: any;
  month: any;
  face: string;
  insta: string;
}

export default function CardEvent({ ...props }: EventsProps) {
  return (
    <div>
      <div>
        <div>
          <p>{props.day}</p>
          <p>{props.month}</p>
        </div>
        <div>
          <a href={props.face}><FontAwesomeIcon icon={['fab', 'facebook']} style={{color: "#4a4a4a",}} /></a>
          <a href={props.insta}><FontAwesomeIcon icon={['fab', 'instagram']} style={{color: "#4a4a4a",}} /></a>
        </div>
      </div>
      <Card>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
        </Card.Body>
        <Card.Img variant="bottom" src={props.img} />
        <Card.Body>
          <Card.Text>{props.text}</Card.Text>
          <Card.Link href={props.link}>Card Link</Card.Link>
        </Card.Body>
      </Card>
    </div>
  )
}

