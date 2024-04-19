import { useDispatch } from "react-redux";
import { deleteFromCart } from "../../../store/cart/cartSlice";

const CartItem = ({ item, className }) => {
  const dispatch = useDispatch();
  return (
    <div key={item.id} className={className}>
      <h2>{item.name}</h2>
      <p>Price: {item.price}</p>
      <p>Quantity: {item.quantity}</p>
      <button onClick={() => dispatch(deleteFromCart(item.id))}>
        Delete from cart
      </button>
    </div>
  );
};

export default CartItem;
