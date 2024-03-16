import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";

import Home from "./pages/Home/Home";
import PrimaryHeader from "./components/PrimaryHeader";
import SecondaryHeader from "./components/SecondaryHeader";
import Seller from "./pages/Seller";
import Customer from "./pages/Customer";

import Item from "./pages/seller/Item";
import Selleritem from "./pages/seller/selleritem";
import UpdateItem from "./pages/seller/UpdateItem";

import Shop from "./pages/shop";
import Menu from "./pages/cart/Menu";
import Cart from "./pages/Cart";

// import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <PrimaryHeader />
      <SecondaryHeader />
      {/* <Header /> */}{" "}
      {/* Apply margin top to the content after the Header */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/seller" element={<Seller />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/cart" element={<Cart />} />

        <Route path="/item" element={<Item />} />
        <Route path="/selleritem" element={<Selleritem />} />
        <Route path="/UpdateItem/:id/edit" element={<UpdateItem />} />

        <Route path="/shop" element={<Shop/>} />
        <Route path="menu" element={<Menu />} />
       <Route path="menu/:filterby" element={<Menu />} />
      

        {/* <Feedback /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
