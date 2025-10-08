import React from "react";
import downloadImg from "../assets/icon-downloads.png";
import ratingImg from '../assets/icon-ratings.png'

const Installation = () => {

  return (
    <div className="container mx-auto px-5 my-10">
      <h1 className="text-center font-bold text-4xl">Your Installed Apps</h1>
      <p className="text-xl text-[#627382] text-center mt-4">
        Explore All Trending Apps on the Market developed by us
      </p>
      <div className="mt-10 flex items-center justify-between">
        <p>(132) Apps Found</p>
        <fieldset className="fieldset">
          <select defaultValue="Sort By Size" className="select">
            <option disabled={true}>Sort By Size</option>

            <option>Accending</option>
            <option>Deccending</option>
          </select>
        </fieldset>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <div className="bg-white p-4 rounded-sm flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-red-400 w-20 rounded-lg"></div>
            <div className="flex flex-col gap-2">
              <h1 className="text-xl font-medium">
                Forest: Focus for Productivity
              </h1>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <img src={downloadImg} alt="" className="w-4"/>
                  <p>downloads</p>
                </div>
                <div className="flex items-center gap-2">
                  <img src={ratingImg} alt="" className="w-4"/>
                  <p>ratings</p>
                </div>
              </div>
            </div>
          </div>
          <button className="btn py-3 px-4 rounded-sm bg-[#00d390] text-white">Uninstall</button>
        </div>
      </div>
    </div>
  );
};

export default Installation;
