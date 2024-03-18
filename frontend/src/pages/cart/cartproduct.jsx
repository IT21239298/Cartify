import React from "react";
import { BiSolidMessageRoundedDetail } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { TbPlus, TbMinus } from "react-icons/tb";
import {
  deleteCartItem,
  increaseQty,
  decreaseQty,
} from "../../services/redux/productSlice";
import { useDispatch } from "react-redux";

const CartProduct = ({ id, images, categories, qty, title, price, total }) => {
  const dispatch = useDispatch();

  return (
    <div className="bg-slate-200 p-2 flex flex-col items-center gap-4 rounded-lg border border-slate-300" style={{ width: 500, height: 600 }}>
    <div className="flex justify-end w-500">
        <div
            className="cursor-pointer text-slate-700 hover:text-red-500 py-4 " style={{ marginLeft: 350}}
            onClick={() => dispatch(deleteCartItem(id))}
        >
            <AiFillDelete />
        </div>
    </div>
    <div className="flex flex-col gap-1 w-full h-full items-center">
        <h3 className="font-semibold text-slate-600 capitalize text-lg md:text-xl text-center">
            title
        </h3>
        <div className="flex justify-center">
            <div className="p-3 bg-white rounded overflow-hidden">
                <img src={images} className="h-28 w-40 object-cover" />
            </div>
        </div>
        <p className="text-slate-500 font-medium text-center">categories</p>
        <p className="font-bold text-base text-center">
            <span className="text-red-500">$</span>
            <span>price</span>
        </p>
        <hr className="w-1/2 border-slate-300 my-4" /> {/* Horizontal line */}
        <div className="flex gap-3 items-center">
            <button
                onClick={() => dispatch(increaseQty(id))}
                className="bg-slate-300 py-1 mt-2 rounded hover:bg-slate-400 p-1"
            >
                <TbPlus />
            </button>
            <p className="font-semibold p-1">{qty}</p>
            <button
                onClick={() => dispatch(decreaseQty(id))}
                className="bg-slate-300 py-1 mt-2 rounded hover:bg-slate-400 p-1"
            >
                <TbMinus />
            </button>
        </div>
        <div className="flex items-center gap-2 font-bold text-slate-700">
            <p>Total :</p>
            <p>
                <span className="text-red-500">$</span>
                total
            </p>
        </div>
        <hr className="w-3/4 border-blue-950 my-4" /> {/* Horizontal line */}
    </div>
</div>

  );
};

export default CartProduct;
