import React from "react";
import { useNavigate } from "react-router";
import notFoundImg from '../assets/App-Error.png'

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div>
      <img src={notFoundImg} alt="" className="mx-auto"/>
      <p className="text-center text-2xl mb-5">page not found</p>
      <div className="flex justify-center">
        <button
          onClick={() => navigate(-1)}
          className="btn bg-linear-to-br from-[#632ee3] to-[#9f62f2] text-white"
        >
          Go Back!
        </button>
      </div>
    </div>
  );
};

export default NotFound;
