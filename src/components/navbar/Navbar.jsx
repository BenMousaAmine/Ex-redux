import { router } from "../../App";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <button onClick={() => router.navigate("/")}>Home</button>
      <button onClick={() => router.navigate("/posts")}>Posts</button>
      <button onClick={() => router.navigate("/recipes")}>Recipes</button>
      <button onClick={() => router.navigate("/cart")}>Cart</button>
    </nav>
  );
};
export default Navbar;
