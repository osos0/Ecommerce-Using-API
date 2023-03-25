import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Navbar from "./componante/Navbar";
import Producteslist from "./componante/producteslist";
import Slider from "./componante/Slider";
import About from "./componante/About";
import Productdetails from "./componante/Productdetails";
import { Route, Routes } from "react-router-dom";
import { Fragment } from "react";
import "./index.css";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Slider />
              <Producteslist />
            </>
          }
        />
        {/* Dynamic URL  example[http://localhost:3000/product/1] */}
        <Route
          path="product/:productId"
          element={
            <>
              <Productdetails />
            </>
          }
        />
        {/* <Route path="." element="" /> */}
        <Route path="/about" element={<About />} />
      </Routes>
    </Fragment>
  );
}

export default App;
