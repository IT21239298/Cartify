// Welcome.js
import { Sell } from "@mui/icons-material";
import React from "react";
import { FaSignInAlt } from "react-icons/fa";
import SellerItem from "./seller/selleritem";


function Welcome() {
  return (
    <section className="heading">
      <h1>
        <FaSignInAlt /> Welcome
      </h1>
      <p>Welcomeee</p>
      <SellerItem/>
    </section>
  );
}

export default Welcome;


