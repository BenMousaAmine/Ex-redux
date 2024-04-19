import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Posts from "./pages/Post/Posts";
import PostDetail from "./pages/Post/PostDetail";
import Cart from "./pages/Cart/Cart";
import Home from "./pages/home/Home";
import NavBar from "./components/NavBar";
import Error from "./components/Error";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/posts",
        element: <Posts />,
    },
    {
        path: "/posts/:id",
        element: <PostDetail />,
    },
    {
        path: "*",
        element: <Error />,
    },
    {
        path: "/cart",
        element: <Cart />,
    },
]);



const App = () => {
    return(
        <>
            <NavBar/>
            <RouterProvider router={router} />
        </>

    )
}

export default App