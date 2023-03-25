import { Link } from "react-router-dom";
function Producte(props) {
  return (
    <>
      <div className="col-lg-4 col-md-6 col-sm-12 cardFather">
        <div className="card">
          <img
            src={props.prod.image}
            className="card-img-top"
            alt={props.prod.title}
          />
          <div className="card-body">
            <h5 className="card-title">{props.prod.title}</h5>
            <p className="card-text">{props.prod.description}</p>
            <Link to={`product/${props.prod.id}`} className="btn btn-primary">
              Details
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Producte;
