import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCart, loadCart } from "../../store/cart/cartSlice";
import CartItem from "./components/CartItem";
import "./style/cart.css";

const Cartpage = () => {
  const dispatch = useDispatch();
  const cart = useSelector(getCart);

  useEffect(() => {
    dispatch(loadCart());
  }, []);

  return (
    <div className="cart__page">
      <h1>Cart</h1>
      <div className="list">
        {cart.map((item, index) => (
          <CartItem key={index} item={item} className={"cart__item"} />
        ))}
      </div>
    </div>
  );
};

export default Cartpage;
