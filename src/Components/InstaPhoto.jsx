import cup4 from "../assets/cups//Rectangle 12.png";
import cup5 from "../assets/cups//Rectangle 13.png";
import cup6 from "../assets/cups//Rectangle 14.png";
import cup7 from "../assets/cups//Rectangle 15.png";
import cup8 from "../assets/cups//Rectangle 16.png";
import cup2 from "../assets/cups/Rectangle 10.png";
import cup3 from "../assets/cups/Rectangle 11.png";
import cup1 from "../assets/cups/Rectangle 9.png";

const InstaPhoto = () => {
  return (
    <div className="mt-20">
      <h1 className="text-xl md:text-2xl font-bold text-center text-[#331A15]">
        Follow on Instagram
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:w-11/12 mx-auto gap-3 p-5 md:p-12 justify-center">
        <img src={cup1} alt="coffeeCup" />
        <img src={cup2} alt="coffeeCup" />
        <img src={cup3} alt="coffeeCup" />
        <img src={cup4} alt="coffeeCup" />
        <img src={cup5} alt="coffeeCup" />
        <img src={cup6} alt="coffeeCup" />
        <img src={cup7} alt="coffeeCup" />
        <img src={cup8} alt="coffeeCup" />
      </div>
    </div>
  );
};

export default InstaPhoto;
