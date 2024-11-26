import img from "../assets/more/15.jpg";
import logo1 from "../assets/more/logo1.png";
const Navbar = () => {
  return (
    <div>
      <div className="relative">
        <img className="h-[90px] w-full" src={img} alt="" srcset="" />
        <div className="flex items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <img className="w-[75px] h-[90px] p-2" src={logo1} alt="" />
          <p className="text-white font-bold">Espresso Emporium</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
