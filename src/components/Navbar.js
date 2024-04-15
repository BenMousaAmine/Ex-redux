import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <>
      <Link to={'/products/'}>
        <button>Io</button>
      </Link>
      <Link to={'/products/'}>
        <button>Amine</button>
      </Link>
          <Link to={'/products/'}>
        <button>Brian</button>
      </Link>
    </>
  )
}

export default Navbar;