import icon1 from "../assets/icons/1.png";
import icon2 from "../assets/icons/2.png";
import icon3 from "../assets/icons/3.png";
import icon4 from "../assets/icons/4.png";

const Qualified = () => {
  return (
   <div className="bg-[#ECEAE3] ">
     <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-7 py-5 md:px-14 md:py-10  justify-center md:w-10/12 mx-auto justify-center">
      {/* image */}
      <div >
        <img  src={icon1} alt="" />
        <h1 className="font-semibold text-lg space-y-1">Awesome Aroma</h1>
        <p>You will definitely be a fan of the design & aroma of your coffee</p>
      </div>
      {/* image */}
      <div>
        <img src={icon2} alt="" />
        <h1 className="font-semibold text-lg space-y-1">High Quality</h1>
        <p>We served the coffee to you maintaining the best quality</p>
      </div>
      {/* image */}
      <div>
        <img src={icon3} alt="" />
        <h1 className="font-semibold text-lg space-y-1">Pure Grades</h1>
        <p>The coffee is made of the green coffee beans which you will love</p>
      </div>
      {/* image */}
      <div>
        <img src={icon4} alt="" />
        <h1 className="font-semibold text-lg space-y-1">Proper Roasting</h1>
        <p>Your coffee is brewed by first roasting the green coffee beans</p>
      </div>
    </div>
   </div>
  );
};

export default Qualified;
