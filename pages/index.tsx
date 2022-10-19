import type { NextPage } from "next";
import Categories from "../components/Landing/Categories";
import Deals from "../components/Landing/Deals";
import Features from "../components/Landing/Features";
import Footer from "../components/Landing/footer";
import Hero from "../components/Landing/Hero";

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <Deals />
      <Categories />
      <Features />
      <Footer />
    </>
  );
};

export default Home;
