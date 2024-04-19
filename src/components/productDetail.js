import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {addCart} from "../store/slice/cartSlice"

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([])
  const dispatch = useDispatch()

  

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetch("https://dummyjson.com/products/" + id)
      const data = await resp.json()
      console.log(data)
      setProduct(data)
    }
    fetchData()
  }, [])
  
  const handleCart = (e) => {
    e.preventDefault();

    dispatch(addCart(product))
  }

  return (<>
    <h1>{product?.title}</h1>
    <img src={product?.thumbnail} alt="" />

    <p>{product?.description}</p>

    <p>{product?.price}</p>
    <button onClick={handleCart}>Add to cart</button>
  </>)
}

export default ProductDetail