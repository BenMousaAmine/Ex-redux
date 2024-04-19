import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCart } from "../store/slice/cartSlice";

const Navbar = () => {
  const cart = useSelector(getCart);
  console.log(cart)
  return (
    <>
      <div className="navigation">
        <Link to={"/products/"}>
          <button>Io</button>
        </Link>
        <Link to={"/products/"}>
          <button>Amine</button>
        </Link>
        <Link to={"/products/"}>
          <button>Brian</button>
        </Link>
        <Link to={"/cart/"}>
          <button className="rightli">Carrello ({cart.data.length})</button>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
