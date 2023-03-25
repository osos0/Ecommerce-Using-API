import Producte from "./Producte";
import { useEffect, useState } from "react";

function Producteslist() {
  const apiUrl = "https://fakestoreapi.com/products";
  const [Pro, setPro] = useState([]);
  const [Category, setCategory] = useState([]);

  const getAll = () => {
    fetch(`${apiUrl}/categories`)
      .then((res) => res.json())
      .then((data) => setCategory(data));
  };

  useEffect(() => {
    getAll();
  }, []);

  const changeCat = (catName) => {
    fetch(`${apiUrl}/category/${catName}`)
      .then((res) => res.json())
      .then((data) => {
        setPro(data);
      });
  };

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        setPro(data);
      });
  }, []);

  return (
    <>
      <h1 className="text-center p-4">Productions</h1>
      <>
        <h1 className="text-center p-4">
          <button
            className="btn btn-info"
            onClick={() => {
              getAll();
            }}
          >
            All
          </button>
          {Category.map((cat) => (
            <button
              key={cat}
              className="btn btn-info"
              onClick={() => {
                changeCat(cat);
              }}
            >
              {cat}
            </button>
          ))}
        </h1>
      </>

      <div className="container">
        <div className="row">
          {Pro.map((prod) => {
            // i think prod = {prod} to name the object with .. to use it easy while i path it
            return <Producte prod={prod} key={prod.id} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Producteslist;
