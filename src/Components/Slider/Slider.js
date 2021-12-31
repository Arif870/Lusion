import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./Slider.css";
import headerimg from "../../images/header.png";
import { Link } from "react-router-dom";

const Slider = () => {
  return (
    <div className="hero">
      <Container>
        <Row className="d-flex justify-content-center align-items-center">
          <Col md={6}>
            <h1>ORGANIC</h1>
            <h3>foods</h3>
            <p>SmartWatches</p>
            <p>
              Bring health to your home in a couple of clicks. Buy organic food
              right from farmers.
            </p>
            <Link to="/shop">
              <Button variant="outline-danger" size="lg" className="mb-5">
                View all products
              </Button>
            </Link>
          </Col>
          <Col md={6}>
            <img style={{ width: "100%" }} src={headerimg} alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Slider;
