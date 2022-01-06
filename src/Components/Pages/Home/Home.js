import React from "react";
import { Process } from "../../Process/Process";
import ProductsButton from "../../ProductsButton/ProductsButton";
import Shop from "../../Shop/Shop";
import Slider from "../../Slider/Slider";

const Home = () => {
  return (
    <>
      <Slider />
      <Process />
      <Shop productLink={"http://localhost:8000/products?_limit=8"} />
      <ProductsButton />
    </>
  );
};

export default Home;
