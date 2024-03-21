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
import AdminReview from "./pages/AdminReview";
import Cart from "./pages/Cart";
import Review from "./components/Review";
import SellerDashboard from "./pages/seller/SellerDashboard";
// import StarReview from "./components/StarReview";
import SellerReview from "./pages/seller/SellerReview";
import { ToastContainer, toast } from "react-toastify";

// import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
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
        <Route path="/review" element={<Review />} />
        <Route path="/reviewrating" element={<SellerReview />} />
        <Route path="/adminReview" element={<AdminReview />} />
        <Route path="/item" element={<Item />} />
        <Route path="/sellerDashboard" element={<SellerDashboard />} />
        {/* <Route path="/star" element={<StarReview />} /> */}
        <Route path="/selleritem" element={<Selleritem />} />
        <Route path="/UpdateItem/:id/edit" element={<UpdateItem />} />

        <Route path="/shop" element={<Shop />} />
        <Route path="menu" element={<Menu />} />
        <Route path="menu/:filterby" element={<Menu />} />
      </Routes>
      <FooterSecondary />
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </BrowserRouter>
  );
}

export default App;
