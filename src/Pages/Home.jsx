import React from "react";
import heroImg from '../assets/hero.png'
import Banner from "../Components/Banner";
const Home = () => {
  return (
    <div className="py-10">
      <Banner/>
      <img src={heroImg} alt="BannerImg" className="mx-auto mt-10"/>
      <div className="bg-linear-to-br from-[#632ee3] to-[#9f62f2] py-5 lg:p-20 text-white">
       <div className="container mx-auto px-5">
         <h2 className="text-center font-bold text-3xl">Trusted by Millions, Built for You</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10">
          <div className="flex flex-col items-center">
            <p className="opacity-80">Total Downloads</p>
              <h3 className="font-bold text-4xl my-4">29.6M</h3>
              <p className="opacity-80">21% more than last month</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="opacity-80">Total Reviews</p>
              <h3 className="font-bold text-4xl my-4">906K</h3>
              <p className="opacity-80">46% more than last month</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="opacity-80">Active Apps</p>
              <h3 className="font-bold text-4xl my-4">132+</h3>
              <p className="opacity-80">31 more will Launch</p>
          </div>
        </div>
       </div>
      </div>
    </div>
  );
};

export default Home;
