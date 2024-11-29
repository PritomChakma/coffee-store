import { NavLink } from "react-router-dom";
import img from "../assets/more/15.jpg";
import logo1 from "../assets/more/logo1.png";
const Navbar = () => {
  return (
    <div>
      <div className="relative">
        <img className="h-[100px] w-full" src={img} alt="" srcset="" />
        <div className="md:flex items-center justify-between md:gap-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="flex items-center">
            <img className="w-[75px] h-[90px] p-2" src={logo1} alt="" />
            <p className="text-white font-bold">Espresso Emporium</p>
          </div>
          <div className="flex gap-5">
            <NavLink to="/" className="text-white font-bold">Home</NavLink>
            <NavLink to="/login" className="text-white font-bold">Login</NavLink>
            <NavLink to="/signup" className="text-white font-bold">Signup</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
