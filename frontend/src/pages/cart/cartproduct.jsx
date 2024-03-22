import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { TbPlus, TbMinus } from "react-icons/tb";
import {
  deleteCartItem,
  decreaseCartItemQuantity,

} from "../../services/redux/productSlice";
import { useDispatch } from "react-redux";

const CartProduct = ({ id, images, categories, qty, title, price, total }) => {
  const dispatch = useDispatch();

  return (
    <div
      className="bg-blue-100 p-2 flex flex-col items-center gap-4 rounded-lg border hover:shadow-lg drop-shadow-lg border-slate-300 "
      style={{ width: 500, height: 600 }}
    >
      <div className="flex justify-end w-500">
        <div
          className="cursor-pointer text-blue-900 hover:text-red-500 py-4  "
          style={{ marginLeft: 350 }}
          onClick={() => dispatch(deleteCartItem(id))}
        >
          <AiFillDelete    size="30px"/>
        </div>
      </div>
      <div className="flex flex-col gap-1 w-full h-full items-center">
        <h3 className="text-3xl font-sans text-gray-800 text-justify font-medium mb-2 capitalize -mt-2">
          {title}
        </h3>
        <div className="flex justify-center">
          <div className="p-3 bg-blue-100 rounded overflow-hidden w-64 h-52 justify-center">
            <img src={images[0]} className="h-52 w-64 object-cover rounded" />
          </div>
        </div>
        <p className="text-slate-500 font-medium text-2xl mt-2 ">
          {categories}
        </p>
        <hr className="w-3/4 border-blue-900 my-4" />
        <p className="font-bold md:text-2xl ">
          <span className="text-red-500">Rs.</span>
          <span>{price}</span>
        </p>
        <hr className="w-3/4 border-blue-900 my-4" />
        <div className="flex gap-3 items-center">
          <button
            onClick={() => dispatch(decreaseCartItemQuantity(id, qty + 1))}
            className="bg-slate-300 py-1 mt-2 rounded hover:bg-slate-400 p-1"
          >
            <TbPlus />
          </button>
          <p className="font-semibold p-2 mt-1">{qty}</p>
          <button
            onClick={() => dispatch(decreaseCartItemQuantity(id, qty - 1))}
            className="bg-slate-300 py-1 mt-2 rounded hover:bg-slate-400 p-1"
          >
            <TbMinus />
          </button>
        </div>
        <div className="flex items-center gap-2  text-slate-700 font-bold md:text-2xl">
          <p>Total :</p>
          <p>
            <span className="text-red-500 ">Rs.</span>
            {total}
          </p>
        </div>
       
      </div>
    </div>
  );
};

export default CartProduct;
