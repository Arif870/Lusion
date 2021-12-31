import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Pages/Home/Home";
import About from "./Components/Pages/About/About";
import Blog from "./Components/Pages/Blog/Blog";
import Contact from "./Components/Pages/Contact/Contact";
import Shop from "./Components/Pages/Products/Products";
import Team from "./Components/Pages/Team/Team";
import Vegetables from "./Components/Pages/Vegetables/Vegetables";
import Header from "./Components/Header/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/team" element={<Team />} />
          <Route path="/vegetables" element={<Vegetables />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
