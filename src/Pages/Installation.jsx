import React, { useEffect, useState } from "react";
import InstallApps from "./InstallApps";
import useCustomData from "../Hooks/useCustomData";
import LoadingSpinner from "../Components/LoadingSpinner";

const Installation = () => {
  const {loading} = useCustomData();
  const [sort, setSort] = useState("Sort by downloads");
  const [installedList, setInstalledList] = useState([]);
  useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem("installed"));
    if (savedList) setInstalledList(savedList);
  }, []);

  const handleSort = (() => {
    if (sort === "asc") {
      return [...installedList].sort((a, b) => b.downloads - a.downloads);
    } else if (sort === "dsc") {
      return [...installedList].sort((a, b) => a.downloads - b.downloads);
    } else {
      return installedList;
    }
  })();

  const handleRemove = (id) => {
    const dataList = JSON.parse(localStorage.getItem("installed"));
    const updateList = dataList.filter(d => d.id !== id);
    setInstalledList(updateList)
    localStorage.setItem("installed",JSON.stringify(updateList))
  }

  return (
    <>
    {
      loading ? <LoadingSpinner/> : <div className="container mx-auto px-5 my-10">
      <h1 className="text-center font-bold text-4xl">Your Installed Apps</h1>
      <p className="text-xl text-[#627382] text-center mt-4">
        Explore All Trending Apps on the Market developed by us
      </p>
      <div className="mt-10 flex items-center justify-between">
        <p>({installedList.length}) Apps Found</p>
        <select
          defaultValue="Sort by downloads"
          className="select"
          onChange={(e) => setSort(e.target.value)}
        >
          <option disabled={true}>Sort by downloads</option>
          <option value="asc">Ascending</option>
          <option value="dsc">Descending</option>
        </select>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        {handleSort.map((apps) => (
          <InstallApps key={apps.id} data={apps} handleRemove={handleRemove}/>
        ))}
      </div>
    </div>
    }
    </>
  );
};

export default Installation;
