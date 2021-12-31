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
      <Shop />
      <ProductsButton />
    </>
  );
};

export default Home;
