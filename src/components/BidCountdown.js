import React from "react";
import ReactDOM from "react-dom";
import Countdown from "react-countdown";
import { Col, Row } from "react-bootstrap";

// Random component
const Completionist = () => <span>You are good to go!</span>;

// Renderer callback with condition
const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a complete state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <div className="d-flex">
        <Col>
          <p style={{fontSize:'.75rem'}} className="mb-0"><strong>{hours}</strong></p>
          <p style={{fontSize:'.52rem'}}>Hours</p>
        </Col>
        <Col>
          <p style={{fontSize:'.75rem'}} className="mb-0"><strong>{minutes}</strong></p>
          <p style={{fontSize:'.52rem'}}>Mins</p>
        </Col>
        <Col>
          <p style={{fontSize:'.75rem'}} className="mb-0"><strong>{seconds}</strong></p>
          <p style={{fontSize:'.52rem'}}>Secs</p>
        </Col>
      </div>

    );
  }
};

export default function BidCountdown() {
  return (
    <Countdown date={Date.now() + 5000000} renderer={renderer} />
  )
}
