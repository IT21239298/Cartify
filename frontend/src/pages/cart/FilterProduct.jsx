import React from "react";
import { GiBootStomp } from "react-icons/gi";

const FilterProduct = ({ brand, onClick, isActive }) => {
  return (
    <div onClick={onClick}>
      <div
        className={`text-3xl p-5  rounded-full cursor-pointer ${
          isActive ? "bg-red-600 text-white" : "bg-blue-500"
        }`}
      >
        <GiBootStomp />
      </div>
      <p className="text-center font-medium my-1 capitalize">{brand}</p>
    </div>
  );
};

export default FilterProduct;
