import React, { useState } from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import "./Filter.css";

const Filter = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        className="mt-3 btnFilter"
        variant="outline-danger"
        onClick={handleShow}
      >
        <i
          className="fas fa-sort-amount-up "
          style={{ marginRight: "13px" }}
        ></i>
        Filter
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Filter your chooise</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row xs={2}>
            <Col>
              <p style={{ fontSize: "20px" }}>Category</p>
              <input type="checkbox" name="fruits" id="fruits" />{" "}
              <label htmlFor="fruits">Fruits</label> <br />
              <input type="checkbox" name="vegetables" id="vegetables" />{" "}
              <label htmlFor="vegetables">Vegetables</label>
            </Col>
            <Col>
              <p style={{ fontSize: "20px" }}>Tags</p>
              <p>favourite | fruits | vegetables | green fruits</p>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Filter;
