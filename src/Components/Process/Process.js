import React from "react";
import { Row, Col, Card, Container } from "react-bootstrap";
import firststep from "../../images/discover.png";
import secondstep from "../../images/starter.png";
import thirdstep from "../../images/order.png";
import fourthstep from "../../images/box.png";
import fifthstep from "../../images/enjoy.png";
import "./Process.css";

let process = [
  {
    id: 1,
    title: "Discover",
    desc: "Take a look at our fruit & Veg bags with seasional produce",
    img: firststep,
  },
  {
    id: 2,
    title: "Pick a starter option",
    desc: "Choose from select produce to start. Keep, add, or remove items",
    img: secondstep,
  },
  {
    id: 3,
    title: "Order",
    desc: "Choose your payment method & delivery option",
    img: thirdstep,
  },
  {
    id: 4,
    title: "Get a box",
    desc: "Your oder will be harvested and delivery to you",
    img: fourthstep,
  },
  {
    id: 5,
    title: "Enjoy",
    desc: "Enjoy healthy fresh organic produce and our recipes",
    img: fifthstep,
  },
];

export const Process = () => {
  return (
    <>
      <Container className="my-5">
        <Row xs={2} md={4} lg={5} className="process">
          {process.map(processdata => (
            <Col
              key={processdata.id}
              className="mt-3"
              style={{ textAlign: "center" }}
            >
              <Card style={{ border: "none" }}>
                <Card.Img
                  variant="top"
                  src={processdata.img}
                  style={{ width: "130px", display: "block", margin: "auto" }}
                />
                <Card.Body>
                  <Card.Title>{processdata.title}</Card.Title>
                  <Card.Text className="mt-3">{processdata.desc}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};
