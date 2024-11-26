import { createBrowserRouter } from "react-router-dom";
import AddCoffee from "../Components/AddCoffee";
import UpdateCoffee from "../Components/UpdateCoffee";
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
        loader: ()=>fetch("http://localhost:5000/coffees")
      },
      {
        path: "/addCoffee",
        element: <AddCoffee></AddCoffee>,
      },
      {
        path: "/updateCoffee",
        element: <UpdateCoffee></UpdateCoffee>,
      },
    ],
  },
]);
export default router;
