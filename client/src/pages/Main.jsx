import React from "react";
import Banner from "../components/banner/Banner";
import Navbar from "../components/navbar/Navbar";
import CarouselSlider from "../components/carousel/Carousel";
import Categories from "../components/categories/Categories";
import Footer from "../components/footer/Footer";

const Main = () => {
  return (
    <div>
      <Banner />
      <Navbar />
      <CarouselSlider />
      <Categories />
      <Footer />
    </div>
  );
};

export default Main;
