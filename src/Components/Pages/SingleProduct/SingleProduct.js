import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./SingleProduct.css";

const SingleProduct = () => {
  let { productId } = useParams();
  const [singleproduct, setSingleProduct] = useState([]);

  useEffect(() => {
    let uri = `http://localhost:8000/products?id=${productId}`;
    fetch(uri)
      .then(res => res.json())
      .then(data => setSingleProduct(data));
  }, []);
  return (
    <>
      <div className="container mt-5 singleProduct">
        <div className="row d-flex flex-wrap align-items-center">
          <div className="col">
            <img
              style={{ width: "100%" }}
              src="https://i.ibb.co/BjpB53W/nuts.png"
              alt=""
            />
          </div>
          <div className="col">
            <h1>nedgu nuts</h1>
            <p className="mt-4">
              Almond Nuts of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to
              make a type specimen.
            </p>
            <p className="text-success">32 in stock 😃</p>
            <p className="fs-4">Price: $20</p>
            <div className="d-flex align-items-center">
              <span>
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
              <span className="p-3">1</span>
              <span>
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
            <hr />
            <p className="mt-5 fs-4">Category : Vegetables</p>
          </div>
        </div>
      </div>
      {/* {singleproduct.map(pro => (
        <h1>{pro.name}</h1>
      ))} */}
    </>
  );
};

export default SingleProduct;
