import { useParams } from "react-router-dom";
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

  return (<>
    <h1>{product?.title}</h1>
    <img src={product?.thumbnail} alt="" />

    <p>{product?.description}</p>

    <p>{product?.price}</p>
  </>)
}

export default ProductDetail