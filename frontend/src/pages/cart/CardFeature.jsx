import React from "react";
import { Link } from "react-router-dom";
import { addCartItem } from "../../services/redux/productSlice";
import { useDispatch } from "react-redux";

const CardFeature = ({ images, categories, quantity, description, loading, id,title,price }) => {
  const dispatch = useDispatch();
  const handleAddCartProduct = (e) => {
    dispatch(
      addCartItem({
        _id: id,
        images: images,
        categories: categories,
        quantity: quantity,
        description: description,
        title:title,
        price:price
       
       
      })
    );
  };

  return (
    <div className="w-full min-w-[200px] max-w-[200px] bg-white hover:shadow-lg drop-shadow-lg py-5 px-4 cursor-pointer flex flex-col ">
      {price ? (
        <>
          <Link
            to={`/menu/${id}`}
            onClick={() => window.scrollTo({ top: "0", behavior: "smooth" })}
          >
            <div className="h-28 flex flex-col justify-center items-center ">
              <img src={price} className="h-full" />
            </div>
            <h3 className="font-semibold text-slate-600  capitalize text-lg mt-4">
              {categories}
            </h3>
            <p className=" text-slate-500  font-medium">{price}</p>
            <p className=" font-bold">
              <span className="text-red-500">$</span>
              <span>{quantity}</span>
            </p>
            <p className=" font-bold">
              <span className="text-red-500">$</span>
              <span>{description}</span>
            </p>
            <p className=" font-bold">
              <span className="text-red-500">$</span>
              <span>{title}</span>
            </p>
          </Link>
          <button
            className="bg-blue-500 py-1 mt-2 rounded hover:bg-blue-600 w-full"
            onClick={handleAddCartProduct}
          >
            Add Cart
          </button>
        </>
      ) : (
        <div className="flex justify-center  text-red-500 items-center h-full">
          <p>{loading}</p>
        </div>
      )}
    </div>
  );
};

export default CardFeature;
