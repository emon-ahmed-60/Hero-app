import React from "react";
import logo from "../assets/logo.png";
import twitterImg from '../assets/twitter.png'
import linkedInImg from '../assets/linkedIn.png'
import facebookImg from '../assets/facebook.png'
const Footer = () => {
  return (
    <footer className="bg-neutral text-neutral-content">
      <div className="container mx-auto px-5 py-8">
        <div className="flex items-center justify-between border-b border-[#e5e7eb20] ">
          <div className="flex items-center gap-4">
            <img className="w-10" src={logo} alt="" />
          <h4 className="font-bold">HERO.IO</h4>
          </div>
          <div className="">
            <p className="text-center mb-4">Social icons</p>
            <div className="flex items-center justify-between gap-5">
              <img src={twitterImg} alt="" />
              <img src={linkedInImg} alt="" />
              <img src={facebookImg} alt="" />
            </div>
          </div>
        </div>
        <p className="text-center mt-7">Copyright © 2025 - All right reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
