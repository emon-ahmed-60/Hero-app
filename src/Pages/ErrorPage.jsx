import React from "react";
import errorImg from "../assets/error-404.png";
import { useNavigate } from "react-router";
import useCustomData from "../Hooks/useCustomData";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import LoadingSpinner from "../Components/LoadingSpinner";
const ErrorPage = () => {
  const navigate = useNavigate();
  const { loading } = useCustomData();
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1 bg-[#d9d9d9]">
        {loading ? (
          <LoadingSpinner />
        ) : (
          <div className="my-10 flex flex-col items-center">
            <img src={errorImg} alt="" />
            <h3 className="font-semibold text-3xl mt-5">
              Oops, page not found!
            </h3>
            <p className="text-xl text-[#627382] my-4 text-center">
              The page you are looking for is not available.
            </p>
            <button
              onClick={() => navigate(-1)}
              className="btn bg-linear-to-br from-[#632ee3] to-[#9f62f2] text-white"
            >
              Go Back!
            </button>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default ErrorPage;
