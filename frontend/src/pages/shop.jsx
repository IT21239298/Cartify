import React, { useEffect } from "react";
import axios from "axios";

import { setDataProduct } from "../services/redux/productSlice";

import { useDispatch, useSelector } from "react-redux";

import { API_BASE_URL } from "../utils/constants";
import AllProduct from "./cart/AllProduct";
import ShopHeader from "../components/Shop/ShopHeader";

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
        
    <div>
      <div>
          <ShopHeader/>
      </div>
      <div>
      <AllProduct heading={""} />
      </div>
    </div>

      
    
  );
}

export default Shop;
