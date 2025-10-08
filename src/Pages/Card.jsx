import React from "react";
import downloadImg from "../assets/icon-downloads.png";
import ratingImg from "../assets/icon-ratings.png";
import { useNavigate } from "react-router";

const Card = ({ data }) => {
  const { image, title, ratingAvg, downloads, id } = data;
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/apps/${id}`)}
      className="card rounded-sm p-4 bg-white cursor-pointer hover:scale-110 transition duration-400"
    >
      <img src={image} alt="" className="h-62 object-cover w-full" />
      <h1 className="text-xl my-2">{title}</h1>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-[#00d390] bg-[#f1f5e8] py-1.5 px-2.5 rounded-sm">
          <img src={downloadImg} alt="" className="w-4" />
          <span>{downloads}</span>
        </div>
        <div className="flex items-center gap-2 bg-[#fff0e1] text-[#ff8811] py-1.5 px-2.5 rounded-sm">
          <img src={ratingImg} alt="" className="w-4" />
          <span>{ratingAvg}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
