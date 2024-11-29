import { createBrowserRouter } from "react-router-dom";
import AddCoffee from "../Components/AddCoffee";
import Login from "../Components/Login";
import SignUp from "../Components/SignUp";
import UpdateCoffee from "../Components/UpdateCoffee";
import Users from "../Components/Users";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch("https://coffee-store-server-topaz-six.vercel.app/coffees"),
      },
      {
        path: "/addCoffee",
        element: <AddCoffee></AddCoffee>,
      },
      {
        path: "/updateCoffee/:id",
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({ params }) =>
          fetch(
            `https://coffee-store-server-topaz-six.vercel.app/coffees/${params.id}`
          ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/users",
        element: <Users></Users>,
        loader: () =>
          fetch("https://coffee-store-server-topaz-six.vercel.app/users"),
      },
    ],
  },
]);
export default router;
