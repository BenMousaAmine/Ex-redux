import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Postpage from "./pages/post/Postpage";
import Homepage from "./pages/home/Homepage";
import Recipepage from "./pages/recipe/Recipepage";
import PostDetail from "./pages/post/detail/PostDetail";
import GenericError from "./pages/error/GenericError";
import RecipeDetail from "./pages/recipe/detail/RecipeDetail";
import TodoPage from "./pages/todos/Todopage";
import TodoDetail from "./pages/todos/detail/TodoDetail";
import Navbar from "./components/Navbar"; 

export const router = createBrowserRouter([
  {
    path: "/posts",
    element: Postpage(),
  },
  {
    path: "/posts/:id",
    element: PostDetail(),
  },
  {
    path: "/",
    element: Homepage(),
  },
  {
    path: "*",
    element: GenericError(),
  },
  {
    path: "/recipes",
    element: Recipepage(),
  },
  {
    path: "/recipes/:id",
    element: RecipeDetail(),
  },
  {
    path: "/todo",
    element: TodoPage(),
  },
  {
    path: "/todo/:id",
    element: TodoDetail(),
  },
]);

const App = () => {
  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
