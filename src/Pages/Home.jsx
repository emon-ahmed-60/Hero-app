import React from "react";
import Banner from "../Components/Banner";
import useCustomData from "../Hooks/useCustomData";
import States from "../Components/States";
import Card from "./Card";
import { Link } from "react-router";
import LoadingSpinner from "../Components/LoadingSpinner";
const Home = () => {
  const {datas,loading} = useCustomData();
  const sliceData = datas.slice(0,8);

  return (
    <>
    {
      loading ? <LoadingSpinner/> :  <div className="py-10">
      <Banner/>
      <States/>
      <div className="container mx-auto px-5">
        <h1 className="font-bold text-5xl text-center mb-4 mt-6">Trending Apps</h1>
      <p className="text-xl text-[#627382] text-center">Explore All Trending Apps on the Market developed by us</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-10">
        {
          sliceData.map(data => <Card key={data.id} data={data}/>)
        }
      </div>
      <div className="text-center">
        <Link to="/apps" className="btn bg-linear-to-br from-[#632ee3] to-[#9f62f2] text-white">Show All</Link>
      </div>
      </div>
    </div>
    }
    </>
  );
};

export default Home;
