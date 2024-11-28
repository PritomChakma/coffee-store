import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import InstaPhoto from "../Components/InstaPhoto";
import Product from "../Components/Product";
import Qualified from "../Components/Qualified";

const Home = () => {
  const LoadCoffee = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <Qualified></Qualified>
      <section className="mt-10">
        <Product LoadCoffee={LoadCoffee}></Product>
      </section>
      <InstaPhoto></InstaPhoto>
    </div>
  );
};

export default Home;
