import React from 'react';
import downloadImg from "../assets/icon-downloads.png";
import ratingImg from '../assets/icon-ratings.png'

const InstallApps = ({data,handleRemove}) => {
    const {image,title,downloads,ratingAvg,id} = data
    return (
     
          <div className="bg-white p-4 rounded-sm flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-4">
            <img src={image} alt="" className='w-20 rounded-lg'/>
            <div className="flex flex-col gap-2">
              <h1 className="text-xl font-medium">
                {title}
              </h1>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <img src={downloadImg} alt="" className="w-4"/>
                  <p className="text-[#00d390]">{downloads}</p>
                </div>
                <div className="flex items-center gap-2">
                  <img src={ratingImg} alt="" className="w-4"/>
                  <p>{ratingAvg}</p>
                </div>
              </div>
            </div>
          </div>
          <button onClick={() => handleRemove(id)} className="btn py-3 px-4 rounded-sm bg-[#00d390] text-white mt-2 md:mt-0">Uninstall</button>
        </div>
        
    );
};

export default InstallApps;