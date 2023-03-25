import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
// import Producte from "./Producte";

const Productdetails = () => {
  const param = useParams({});
  const [Details, setDetails] = useState({});

  useEffect(() => {
    const productURL = "https://fakestoreapi.com/products";
    fetch(`${productURL}/${param.productId}`)
      .then((res) => res.json())
      .then((data) => setDetails(data));
  });
  // }, []);

  return (
    <>
      <div className="container text-center p-5">
        <div className="cardetails p-5">
          <h5 className="p-5"> Name : {Details.title}</h5>
          <img src={Details.image} alt={Details.id} />
          <h4 className="p-5"> product description : {Details.description}</h4>
          <h3> category : {Details.category}</h3>
          <h1> Price : {Details.price}</h1>
          <p> product Id useParams {param.productId}</p>
          <p> product Id From useState {Details.id}</p>
        </div>
      </div>
    </>
  );
};

export default Productdetails;
