import { createBrowserRouter, Route, RouterProvider, Routes } from "react-router-dom"
import ProductsList from "./components/productsList"
import ProductDetail from "./components/productDetail"
import Navbar from "./components/navbar"

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
      </Routes>
    </>
  )
}
export default App