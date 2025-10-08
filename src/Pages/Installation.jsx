import React from "react";

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
    </div>
  );
};

export default Installation;
