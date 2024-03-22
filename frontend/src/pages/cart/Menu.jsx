import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCartItems } from "../../services/redux/productSlice";
import axios from "axios";
import { toast } from "react-hot-toast"
import { API_BASE_URL } from "../../utils/constants";
import Reviews from "../../components/reviews/showReviews";
import DefaultButton from "../../components/home/DefaultButton";
import AddReview from "../../components/reviews/AddReview";
import "boxicons";

const Menu = () => {
  const { filterby } = useParams();
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.product.productList);
  const [showReviews, setShowReviews] = useState(false); // State to control the visibility of reviews

  const [openDialog, setOpenDialog] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);


  const handleOpen = () => {
    setOpenDialog(true);
    setIsEditOpen(true);
  };

  useEffect(() => {
    dispatch(fetchAllCartItems());
  }, [dispatch]);

  const productDisplay = productData.filter((el) => el._id === filterby)[0];

  const handleAddCartProduct = () => {
    const productDisplayWithQty = { ...productDisplay, qty: 1 };
    dispatch(fetchAllCartItems(productDisplayWithQty));
    axios
      .post(`${API_BASE_URL}/api/cart`, productDisplayWithQty)
      .then((response) => {
        toast.success("Product added to cart successfully");
        console.log("Product added to cart successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error adding product to cart:", error);
        toast.error("Error adding product to cart");
      });
  };

  const handleShowReviews = () => {
    setShowReviews(true);
  };

  const handleCancelReviews = () => {
    setShowReviews(false);
  };


  return (
    <div className="p-8">
       <Link to={"/shop"}>
        <div className="flex cursor-pointer">
          <div className="ml-32">
            <box-icon name="undo" size="40px"></box-icon>
          </div>
          <div className="mt-2 text-gray-400">Back</div>
        </div>
      </Link>
      <div className=" min-w-[700px] max-w-[200px] bg-blue-100 hover:shadow-lg drop-shadow-lg py-5 px-4 cursor-pointer flex flex-col mx-auto rounded-3xl">
        <div className=" max-w-4xl m-auto md:flex">
          <div className="max-w-sm overflow-hidden w-full p-5 -mt-4 ">
            <img
              src={productDisplay.images[0]}
              className="hover:scale-105 transition-all h-[200px] w-[450px] mr-5 rounded-r"
              alt=""
            />
          </div>
          <div className="p-2 flex flex-col gap-1">
            <h3 className="text-3xl font-sans text-gray-800 text-justify font-medium mb-2 capitalize -mt-2">
              {productDisplay.title}
            </h3>
            <p className="text-slate-500 font-medium text-2xl">
              {productDisplay.categories}
            </p>
            <p className="text-slate-600 font-sans  mx-auto max-w-4xl text-sm italic text-justify mb-2">
              {productDisplay.description}
            </p>
            <p className="font-bold md:text-2xl ml-6">
              <span className="text-red-500">Rs.</span>
              <span>{productDisplay.price}</span>
            </p>
            <div className="flex items-center ml-4 mt-1 mb-1">
              <div className="flex gap-1 text-lg text-yellow-500">
                <span><i className="fa-solid fa-star"></i></span>
                <span><i className="fa-solid fa-star"></i></span>
                <span><i className="fa-solid fa-star"></i></span>
                <span><i className="fa-solid fa-star"></i></span>
                <span><i className="fa-solid fa-star"></i></span>
              </div>
              
            </div>
            <div className=" mb-1">
              <DefaultButton title="Shop Now" onClick={handleAddCartProduct} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-8">
        {/* Show Reviews and Add Reviews buttons */}
        {!showReviews && (
          <div className="flex justify-center">
            <button
              className="bg-gray-700 border-primary text-white px-6 py-3 font-medium 
              rounded-md hover:bg-gray-600 hover:text-white cursor-grab mr-20  "
              onClick={handleShowReviews}
            >
              Show Reviews
            </button>
            <button
              className="bg-gray-700 border-primary text-white px-6 py-3 font-medium 
              rounded-md hover:bg-gray-600 hover:text-white cursor-grab mr-20  "
              onClick={handleOpen}
            >
              Add Reviews
            </button>
            <AddReview
            open={openDialog}
            setOpen={setOpenDialog}
            />
          </div>
        )}
        {/* Cancel button */}
        {showReviews && (
          <div className="flex justify-center mt-4">
            <button
              className="bg-blue-900 py-1 rounded-full hover:bg-blue-800 w-8 h-8 flex items-center justify-center"
              onClick={handleCancelReviews}
            >
              <box-icon
                name="x"
                size="30px"
                color={"#e5e5e5"}
                className="justify-center "
              ></box-icon>
            </button>
          </div>
        )}
        {/* Reviews component */}
        {showReviews && <Reviews />}
      </div>
    </div>
  );
};

export default Menu;
