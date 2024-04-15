import { router } from "../App";

const Navbar = () => {
  return (
    <nav className="navbar">
      <button onClick={() => router.navigate("/")}>Home</button>
      <button onClick={() => router.navigate("/posts")}>Posts</button>
      <button onClick={() => router.navigate("/recipes")}>Recipes</button>
    </nav>
  );
};
export default Navbar;
