import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCartItems } from "../../services/redux/productSlice";
import axios from "axios";
import { toast } from "react-hot-toast"
import { API_BASE_URL } from "../../utils/constants";
import Reviews from "../../components/reviews/showReviews";
import DefaultButton from "../../components/home/DefaultButton";
import "boxicons";

const Menu = () => {
  const { filterby } = useParams();
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.product.productList);
  const [showReviews, setShowReviews] = useState(false); // State to control the visibility of reviews

  useEffect(() => {
    dispatch(fetchAllCartItems());
  }, [dispatch]);

  const productDisplay = productData.filter((el) => el._id === filterby)[0];

  // useEffect(() => {
  //   const fetchAllContents = async () => {
  //     try {
  //       const res = await axios.get(`http://localhost:8082/cart/${productDisplay._id}`);

  //       console.log("Sithum sfsff", res.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   fetchAllContents();
  // }, [dispatch]); // Include dispatch in dependency array
  // console.log("rergregg  iddd",productDisplay._id);

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

  const handleAddReviews = () => {
    // Functionality for adding reviews
    console.log("Add reviews button clicked");
  };

  return (
    <div className="p-8">
      <div className="w-full min-w-[600px] max-w-[200px] bg-white hover:shadow-lg drop-shadow-lg py-5 px-4 cursor-pointer flex flex-col mx-auto rounded-3xl">
        <div className=" max-w-4xl m-auto md:flex bg-white">
          <div className="max-w-sm overflow-hidden w-full p-5 -mt-4 ">
            <img
              src={productDisplay.images[0]}
              className="hover:scale-105 transition-all h-full"
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
            <p className="text-slate-600 font-sans  mx-auto max-w-4xl text-sm italic text-justify mb-4">
              {productDisplay.description}
            </p>
            <p className="font-bold md:text-2xl ml-16">
              <span className="text-red-500">Rs.</span>
              <span>{productDisplay.price}</span>
            </p>
            <div className="flex gap-3 ml-12">
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
              rounded-md hover:bg-gray-600 hover:text-white cursor-grab   "
              onClick={handleAddReviews}
            >
              Add Reviews
            </button>
          </div>
        )}
        {/* Cancel button */}
        {showReviews && (
          <div className="flex justify-center mt-4">
            <button
              className="bg-red-500 py-1 rounded-full hover:bg-red-600 w-8 h-8 flex items-center justify-center"
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
