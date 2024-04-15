import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { findProductById } from "../store/slice/productsSlice";
import { useEffect, useState } from "react";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([])

  

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetch("https://dummyjson.com/products/" + id)
      const data = await resp.json()
      console.log(data)
      setProduct(data)
    }
    fetchData()
}, [])

  console.log(product)

  return (<>
    <h1>{product?.title}</h1>
  </>)
}

export default ProductDetail