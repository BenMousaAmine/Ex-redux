import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllProducts, fetchAllProducts } from "../store/slice/productsSlice";
import { addCart } from "../store/slice/cartSlice";

import Loading from "./loading";

const ProductsList = () => {
  const dispatch = useDispatch();
  const [limit, setLimit] = useState(10);

  const products = useSelector(getAllProducts);

  useEffect(() => {
    dispatch(fetchAllProducts(limit));
  }, [limit]);

  const handleLimit = (e) => {
    setLimit(e.target.value);
  };

  return (
    <div className="div">
      <select onChange={(e) => handleLimit(e)}>
        <option value={10}> 10 </option>
        <option value={20}> 20 </option>
        <option value={30}> 30 </option>
        <option value={40}> 40 </option>
        <option value={50}> 50 </option>
        <option value={60}> 60 </option>
        <option value={70}> 70 </option>
        <option value={80}> 80 </option>
        <option value={90}> 90 </option>
        <option value={100}> 100 </option>
      </select>
      <div>
        {" "}
        {products.loading ? (
          <Loading />
        ) : products.error ? (
          <h3>Suca</h3>
        ) : (
          <div className="listCards">
            {products.data.map((p) => (
              <div key={p.id} className="card">
                <Card props={p} dispatch={dispatch} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsList;

const Card = ({ props, dispatch }) => {
  return (
    <>
      <h2>{props.brand}</h2>
      <h3> {props.title} </h3>

      <img src={props.thumbnail} alt="" />
      <p> {props.description} </p>
      <p> {props.price} €</p>

      <Link to={"/products/" + props.id}>
        <button>Dettaglio</button>
      </Link>
      <button onClick={() => dispatch(addCart(props))}>
        Aggiungi al carrello
      </button>
    </>
  );
};
