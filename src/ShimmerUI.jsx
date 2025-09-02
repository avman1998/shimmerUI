import React from "react";

const ShimmerUI = () => {
  return Array(20)
    .fill(0)
    .map((n, i) => {
      return (
        <div className="m-1 border border-white">
          <div className="w-64 h-64 bg-gray-200"></div>
        </div>
      );
    });
};

export default ShimmerUI;
