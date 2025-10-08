import React from "react";
import { useParams } from "react-router";
import useCustomData from "../Hooks/useCustomData";
import downloadImg from "../assets/icon-downloads.png";
import ratingImg from "../assets/icon-ratings.png";
import reviewImg from "../assets/icon-review.png";
import RatingChart from "../Components/RatingChart";
const CardDetails = () => {
  const { id } = useParams();
  const { datas, loading } = useCustomData();
  const data = datas.find((data) => String(data.id) === id);
  if (loading) return <p>Loading....</p>;
  const { image, title, companyName, downloads, ratingAvg, reviews, description } = data;
  return (
    <div className="container mx-auto px-5 my-10">
      <div className="flex items-center gap-5 border-b border-[#00193120] pb-10">
        <img src={image} alt="" className="h-68 object-cover" />

        <div className="flex-1">
          <h1 className="text-3xl font-bold">{title}</h1>
          <p className="text-xl text-[#627382] pb-7 pt-2 border-b border-[#00193120]">
            {companyName}
          </p>
          <div className="grid lg:grid-cols-3 gap-6 my-5 lg:w-[40%]">
            <div className="flex flex-col items-center gap-2">
              <img src={downloadImg} alt="" className="w-6" />
              <p className="text-[#00193180]">Downloads</p>
              <h2 className="text-[#001931] font-extrabold text-4xl">
                {downloads}
              </h2>
            </div>
            <div className="flex flex-col items-center gap-2">
              <img src={ratingImg} alt="" className="w-6" />
              <p className="text-[#00193180]">Average Ratings</p>
              <h2 className="text-[#001931] font-extrabold text-4xl">
                {ratingAvg}
              </h2>
            </div>
            <div className="flex flex-col items-center gap-2">
              <img src={reviewImg} alt="" className="w-6" />
              <p className="text-[#00193180]">Total Reviews</p>
              <h2 className="text-[#001931] font-extrabold text-4xl">
                {reviews}
              </h2>
            </div>
          </div>
          <button className="btn py-3 px-4 rounded-sm bg-[#00d390] text-white">Install Now</button>
        </div>
      </div>
      <RatingChart/>
      <h1 className='text-2xl font-bold mb-6'>Description</h1>

      <p>{description}</p>
    </div>
  );
};

export default CardDetails;
