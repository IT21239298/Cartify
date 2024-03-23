import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchAllCartItems } from "../../services/redux/productSlice";
import { useDispatch } from "react-redux";

const CardFeature = ({
  images,
  categories,
  quantity,
  description,
  loading,
  id,
  title,
  price,
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCartItems());
  }, [dispatch]);

  const handleAddCartProduct = (e) => {
    dispatch(
      fetchAllCartItems({
        _id: id,
        images: images,
        categories: categories,
        quantity: quantity,
        description: description,
        title: title,
        price: price,
      })
    );
  };

  return (
    <div className="w-full min-w-250px] max-w-[250px] bg-blue-100 hover:shadow-lg drop-shadow-lg py-5 px-4 cursor-pointer flex flex-col justify-center ">
      {price ? (
        <>
          <Link
            to={`/menu/${id}`}
            onClick={() => window.scrollTo({ top: "0", behavior: "smooth" })}
          >
            <div className="h-44 w-44 flex flex-col ml-6 ">
              <img src={images[0]} className="h-full rounded-lg" />
            </div>
            <h3 className="text-2xl font-sans text-gray-800 text-justify font-medium mb-2 capitalize ml-20">
              {title}
            </h3>
            <p className=" text-slate-500 font-medium text-sm ml-16">
              {categories}
            </p>

            <p className=" font-bold ml-20">
              <span>{quantity}</span>
            </p>
            <p className=" font-bold">
              <span className="text-red-500 ml-16 text-lg">Rs.</span>
              <span>{price}</span>
            </p>
          </Link>
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
