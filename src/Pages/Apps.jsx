import React, { useState } from "react";
import useCustomData from "../Hooks/useCustomData";
import Card from "./Card";
import LoadingSpinner from "../Components/LoadingSpinner";

const Apps = () => {
  const { datas, loading } = useCustomData();
  const [search, setSearch] = useState("");
  const term = search.trim().toLowerCase();
  const filterData = term
    ? datas.filter((data) => data.title.toLowerCase().includes(term))
    : datas;
  console.log(filterData);

  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="container mx-auto px-5 my-10">
          <h1 className="text-center font-bold text-4xl">
            Our All Applications
          </h1>
          <p className="text-xl text-[#627382] text-center mt-4">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
          <div className="mt-10 flex items-center justify-between">
            <p>({filterData.length}) Apps Found</p>
            <label className="input">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input
                type="search"
                placeholder="Search"
                onChange={(e) => setSearch(e.target.value)}
              />
            </label>
          </div>
          {filterData.length === 0 ? (
            <h1 className="text-2xl text-center">No App Found</h1>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-10">
              {filterData.map((data) => (
                <Card key={data.id} data={data} />
              ))}
            </div>
          )}
          
        </div>
      )}
    </>
  );
};

export default Apps;
