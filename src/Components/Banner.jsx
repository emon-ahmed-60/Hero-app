import React from 'react';
import playStore from '../assets/play-store.png'
import appStore from '../assets/apple-store.png'
import { Link } from "react-router";
const Banner = () => {
    return (
        <div className='container mx-auto px-5'>
        <h1 className="text-center font-bold text-4xl">
        We Build <br />
        <span className="text-[#9f62f2]">Productive</span> Apps
      </h1>
      <p className="text-center text-[#627382] lg:px-32 mt-4 text-sm md:text-xl">
        At HERO.IO. we craft innovative apps designed to make everyday life
        simpler, smarter, and more exciting.Our goal is to turn your ideas into
        digital experiences that truly make an impact.
      </p>
      <div className="flex items-center justify-center gap-4 mt-10">
        <Link to="https://play.google.com/store/apps?hl=en" className="btn btn-outline py-5 px-6 rounded-sm border-[#d2d2d2]"><img src={playStore} alt="" /> App Store</Link>
        <Link to="https://www.apple.com/app-store/" className="btn btn-outline py-5 px-6 rounded-sm border-[#d2d2d2]"><img src={appStore} alt="" /> App Store</Link>
      </div>
      </div>
    );
};

export default Banner;