import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Filter from "../Filter/Filter";
import "./Shop.css";

const Shop = ({ productLink }) => {
  let [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(productLink)
      .then(data => data.json())
      .then(data => setProducts(data));
  });

  return (
    <>
      <Container className="mt-3">
        <h1 className="text-center text-danger">Our Fresh Picks</h1>
        <p className="text-center">
          Buy fresh and pure fruits and vegetables for our shop.
        </p>
        <div className="d-flex justify-content-between align-items-center mt-5">
          <Filter />
          <input
            style={{ borderColor: `var(--primary-color)` }}
            className="form-control w-50"
            type="text"
            name=""
            id=""
            placeholder="Search Product"
          />
        </div>
        <Row xs={1} md={3} lg={4} className="shop my-5">
          {products.map(product => (
            <Col key={product.id} className="mt-4">
              <Link to={"/shop/" + product.id}>
                <Card style={{ border: "0" }}>
                  <img src={product.img} alt="" />
                  <p>{product.name}</p>
                  <div className="d-flex align-items-center justify-content-between">
                    <h5> ${product.price}/kg</h5>
                  </div>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Shop;
