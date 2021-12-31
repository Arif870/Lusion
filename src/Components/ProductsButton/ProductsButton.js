import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProductsButton = () => {
  return (
    <>
      <Link to="/shop">
        <Button
          variant="outline-danger"
          size="lg"
          className="mb-5 mx-auto d-block"
        >
          View all products
        </Button>
      </Link>
    </>
  );
};

export default ProductsButton;
