import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import { useState } from "react";

const Product = ({ LoadCoffee }) => {
  const [coffees, setCoffee]= useState(LoadCoffee)
  return ( 
    <div>
      <div className="text-center">
        <h1 className="text-xl md:text-2xl text-[#331A15] font-bold">
          Our Popular Product
        </h1>
        <Link to={"/addCoffee"}>
          <button className="px-4 py-2 rounded-lg bg-[#E3B577] text-white mt-3 border-2 border-[#331A15]">
            Add Coffee <i class="fa-solid fa-mug-hot"></i>
          </button>
        </Link>

        {/* <h1>Hot hot coffee : {coffees.length}</h1> */}

        <div className="grid md:grid-cols-3 md:gap-5  md:w-11/12 mx-auto">
          {coffees.map((coffee) => (
            <ProductCard key={coffee._id} coffees={coffees} coffee={coffee} setCoffee={setCoffee}></ProductCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
