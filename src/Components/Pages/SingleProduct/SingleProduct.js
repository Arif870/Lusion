import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "./SingleProduct.css";

const SingleProduct = () => {
  let { productId } = useParams();
  let [singleproduct, setSingleProduct] = useState([]);
  let [addProductCount, setAddProductCount] = useState(0);

  const handleCounter = () => {
    setAddProductCount(addProductCount + 1);
  };
  const productCount = () => {
    if (addProductCount === 0) {
      return (addProductCount = 0);
    }
    setAddProductCount(addProductCount - 1);
  };

  useEffect(() => {
    let uri = `http://localhost:8000/products?id=${productId}`;
    fetch(uri)
      .then(res => res.json())
      .then(data => setSingleProduct(data));
  }, []);
  return (
    <>
      <div className="container mt-5 singleProduct">
        {singleproduct.map(product => (
          <div className="row d-flex flex-wrap align-items-center">
            <div className="col">
              <img style={{ width: "100%" }} src={product.img} alt="" />
            </div>
            <div className="col">
              <h1>{product.name}</h1>
              <p className="mt-4">{product.shortDesc}</p>

              <p className="fs-4">Price: ${product.price}</p>
              <div className="d-flex align-items-center">
                <span onClick={handleCounter}>
                  <i
                    className="fas fa-plus rounded-circle"
                    style={{
                      border: ` 1px solid var(--primary-color)`,
                      marginRight: "10px",
                      padding: "10px",
                      cursor: "pointer",
                    }}
                  ></i>
                </span>
                <span className="p-3">{addProductCount}</span>
                <span onClick={productCount}>
                  <i
                    className="fas fa-minus rounded-circle"
                    style={{
                      border: ` 1px solid var(--primary-color)`,
                      marginLeft: "10px",
                      padding: "10px",
                      cursor: "pointer",
                    }}
                  ></i>
                </span>

                <button
                  style={{
                    backgroundColor: `var(--primary-color)`,
                    color: "white",
                  }}
                  className="btn ms-5"
                >
                  Add to Cart
                </button>
              </div>
              <p className="text-success mt-3">{product.stock} in stock 😃</p>

              <p className="mt-3 fs-5">Category : {product.category}</p>
            </div>
          </div>
        ))}
        <hr />
        <h1>Related Products</h1>
        <Row xs={1} md={3} lg={4} className="shop my-4">
          <Col className="mt-4">
            <Card style={{ border: "0" }}>
              <img src="https://i.ibb.co/BjpB53W/nuts.png" alt="" />
              <p>product name</p>
              <div>
                <h5> $32/kg</h5>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default SingleProduct;
