import { Route, Routes } from "react-router-dom"
import ProductsList from "./components/productsList"
import ProductDetail from "./components/productDetail"
import Navbar from "./components/navbar"
import Cart from "./components/cart"

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <ProductsList ></ProductsList>
//   },
//   {
//     path: "/products/:id",
//     element: <ProductDetail />
//   }
// ])

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/products" element={<ProductsList />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/cart/" element={<Cart />} />
      </Routes>
    </>
  )
}
export default App