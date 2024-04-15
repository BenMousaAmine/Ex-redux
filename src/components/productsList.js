import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom";
import { getAllProducts, fetchAllProducts } from "../store/slice/productsSlice"

const ProductsList = () => {
  const dispatch = useDispatch();
  const [limit, setLimit] = useState(10);

  const products = useSelector(getAllProducts)
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    dispatch(fetchAllProducts(limit));
  }, [limit]);

  const handleLimit = (e) => {
    setLimit(e.target.value);
  };

  console.log(products.loading)

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
      <div> {products.loading ? <h3>Is loading</h3> :
        products.error ? <h3>Suca</h3> :
          <div>
            {
              products.data.map((p) => (
                <Card key={p.id} props={p} />
              ))}
          </div>}
      </div>
    </div>
  )
}

export default ProductsList;


const Card = ({ props }) => {
  const [toggle, setToggle] = useState(false)
  return (
    <>
      <h3 onClick={() => setToggle(!toggle)}> {props.title} </h3>
      {toggle && <><p> {props.description} </p><p> {props.id} </p></>}

      <Link to={'/products/' + props.id}>
        <button>Dettaglio</button>
      </Link>

    </>
  )
}