import { Outlet } from "react-router-dom";
import Banner from "../Components/Banner";
import Navbar from "../Components/Navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
