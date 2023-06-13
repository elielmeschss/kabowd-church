import React, { useState, useEffect } from "react";
import { Card } from 'react-bootstrap'

import './style.scss'

interface EventsProps {
  title: string;
  text: string;
  img: string;
  day: any;
  month: any;
  active: boolean;
  messageAlert: string
}

export default function CardEvent({ ...props }: EventsProps) {
  const [available, setIsAvailable] = useState(true)

  useEffect(()=>{
    if (props.active !== true ) {
      setIsAvailable(false)
    }
  }, [props.active])

  return (
    <div className="mainCardsEvents">
      <div className="cardEventContextInfo">
        <div className="cardInfoDate">
          <p className="cardInfoDateDay">{props.day}</p>
          <p className="cardInfoDateMonth">{props.month}</p>
        </div>
        <div className="cardInfoMedias">
          <a className="facebook-fab" href="https://www.facebook.com/kabowdcomunidade">

          </a>
          <a className="instagram-in" href="https://www.instagram.com/kabowdcomunidade/">

          </a>
        </div>
      </div>
      <Card>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <span className={available ? 'flickerRegister' : ' ' }>Inscrições Abertas</span>
        </Card.Body>
        <Card.Img variant="bottom" src={props.img} />
        <Card.Body>
          <Card.Text>{props.text}</Card.Text>
          <Card.Link href="https://api.whatsapp.com/send?phone=5547997735125&text=Ol%C3%A1,%20Gostaria%20de%20informa%C3%A7%C3%B5es">Inscrever-se</Card.Link>
        </Card.Body>
      </Card>

      {!available &&
        <div className="BackdropUnavailable">...{props.messageAlert}</div>
      }
    </div>
  )
}

