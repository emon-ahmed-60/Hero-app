import React from "react";
import { useNavigate } from "react-router";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div>
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
