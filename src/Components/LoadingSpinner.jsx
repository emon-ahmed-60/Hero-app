import React from "react";
import { FadeLoader } from "react-spinners";

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center">
      <FadeLoader />
    </div>
  );
};

export default LoadingSpinner;
