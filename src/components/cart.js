import { useDispatch, useSelector } from "react-redux"
import { getCart, deleteCart, loadCart } from "../store/slice/cartSlice"
import { useEffect } from "react"

const Cart = () => {
  const cart = useSelector(getCart)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadCart());
  }, []);

  return (
    <>
      <h3>Benvenuto nel tuo carrello</h3>
      
        <div>
        {cart.data.length > 0 ? cart.data.map((p) => (
          <div key={p.id}>
            <h4>{p.title}</h4>
            <p>{p.price}</p>
            <p>{ p.quantity }</p>
            <button onClick={() => dispatch(deleteCart(p.id))}>Cancella</button>
          </div>)) : <h3>Il tuo carrello è vuoto</h3>}
        </div>
    </>
  )
}

export default Cart