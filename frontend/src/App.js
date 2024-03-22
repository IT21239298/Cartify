import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Toaster } from "react-hot-toast"; 
import { fetchAllCartItems } from "./services/redux/productSlice";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Login from "./pages/Login";
import Register from "./pages/Register";

import Home from "./pages/Home/Home";
import PrimaryHeader from "./components/PrimaryHeader";
import SecondaryHeader from "./components/SecondaryHeader";
import Seller from "./pages/Seller";
import Customer from "./pages/Customer";
import ContactUs from "./pages/ContactUs";
import FooterSecondary from "./components/FooterSecondary";

import Item from "./pages/seller/Item";
import Selleritem from "./pages/seller/selleritem";
import UpdateItem from "./pages/seller/UpdateItem";

import Shop from "./pages/shop";
import Menu from "./pages/cart/Menu";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch all cart items when the app mounts
    dispatch(fetchAllCartItems());
  }, [dispatch]);

  return (
    <BrowserRouter>
     <Toaster />
      <PrimaryHeader />
      <SecondaryHeader />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/seller" element={<Seller />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/ContactUs" element={<ContactUs />} />

        <Route path="/item" element={<Item />} />
        <Route path="/selleritem" element={<Selleritem />} />
        <Route path="/UpdateItem/:id/edit" element={<UpdateItem />} />

        <Route path="/shop" element={<Shop />} />
        <Route path="menu" element={<Menu />} />
        <Route path="menu/:filterby" element={<Menu />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <FooterSecondary />
    </BrowserRouter>
  );
}

export default App;
