import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <img src="https://i.ibb.co/BjpB53W/nuts.png" alt="" />
            <div className="d-flex align-items-center">
              <span
                className="rounded"
                style={{
                  border: ` 1px solid var(--primary-color)`,
                  marginRight: "10px",
                  padding: "10px",
                  cursor: "pointer",
                }}
              >
                <i className="fas fa-plus"></i>
              </span>
              <span className="p-3">1</span>
              <span
                className="rounded"
                style={{
                  border: `1px solid var(--primary-color)`,
                  marginLeft: "10px",
                  padding: "10px",
                  cursor: "pointer",
                }}
              >
                <i className="fas fa-minus"></i>
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
          </div>
          <div className="col">
            <h1>nedgu nuts</h1>
            <p>
              Almond Nuts of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to
              make a type specimen.
            </p>
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
