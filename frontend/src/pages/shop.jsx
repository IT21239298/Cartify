import React, { useEffect } from "react";
import axios from "axios";

import { setDataProduct } from "../services/redux/productSlice";

import { useDispatch, useSelector } from "react-redux";

import { API_BASE_URL } from "../utils/constants";
import AllProduct from "./cart/AllProduct";

function Shop() {
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.product.productList);

  useEffect(() => {
    const fetchAllContents = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}/api/seller/get`);
        dispatch(setDataProduct(res.data)); // Dispatch action to store product data
        //console.log("resdfewfew card data", res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllContents();
  }, [dispatch]); // Include dispatch in dependency array
  console.log("rergregg", productData);
  return (
    <section className="heading">
      {/* <h1>
        <FaSignInAlt /> Welcome
      </h1> */}
      <p>Welcomeee</p>
      {/* <SellerItem/> */}

      <AllProduct heading={""} />
    </section>
  );
}

export default Shop;
