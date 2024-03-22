import React, { useState, useEffect } from "react";
import DefaultButton from "../components/home/DefaultButton";
import CheckoutAddress from "./CheckoutAddres";
import visa from "../assets/images/visa.jpg"


function CheckoutForm() {
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [showCheckoutAddress, setShowCheckoutAddress] = useState(true);

  useEffect(() => {
    // Logic to check if the page is reloaded
    // Set showCheckoutAddress to true when the page is reloaded
    setShowCheckoutAddress(true);
  }, []);

  const handleAddressButtonClick = () => {
    setShowAddressForm(!showAddressForm);
    setShowCheckoutAddress(false); // Hide CheckoutAddress component
  };

  const handleContinueButtonClick = () => {
    setShowCheckoutAddress(true);
    setShowAddressForm(false); // Hide address form
  };

  return (
    <div>
      <div className="px-4 pt-4">
        <p className="mt-8 text-lg font-bold">
          Which payment card would you like to use ?
        </p>
      </div>

      {/* Render the radio buttons form */}
      <form className={`mt-5 grid gap-6 ${showAddressForm ? "hidden" : ""}`}>
        <div className="relative">
          <input
            className="peer hidden"
            id="radio_1"
            type="radio"
            name="radio"
            checked
          />
          <span className="peer-checked:border-blue-800 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-blue-300 bg-white"></span>
          <label
            className="peer-checked:border-2 peer-checked:border-blue-700 peer-checked:bg-blue-50 flex cursor-pointer select-none rounded-lg border border-blue-300 p-4"
            htmlFor="radio_1"
          >
            <img
              className="w-16 object-contain"
              src={visa}
              alt=""
            />
            <div className="ml-5">
              <span className="mt-2 font-semibold">Visa XXXX 4242</span>
              <p className="text-slate-500 text-sm leading-6">Exp. 04/07</p>
            </div>
          </label>
        </div>
        <div className="relative">
          <input
            className="peer hidden"
            id="radio_2"
            type="radio"
            name="radio"
            checked
          />
          <span className="peer-checked:border-blue-800 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-blue-300 bg-white"></span>
          <label
            className="peer-checked:border-2 peer-checked:border-blue-700 peer-checked:bg-blue-50 flex cursor-pointer select-none rounded-lg border border-blue-300 p-4"
            htmlFor="radio_2"
          >
               <img
              className="w-16 object-contain"
              src={visa}
              alt=""
            />
            <div className="ml-5">
              <span className="mt-2 font-semibold">Visa XXXX 4242</span>
              <p className="text-slate-500 text-sm leading-6">Exp. 04/07</p>
            </div>
          </label>
        </div>
      </form>

      {/* Button to show address form */}
      <p
        onClick={handleAddressButtonClick}
        className={` text-blue-800 underline py-6 ml-32 cursor-pointer font-bold  ${
          showAddressForm ? "hidden" : ""
        }`}
      >
        Use another card
      </p>

      {/* Address form */}
      {showAddressForm && (
        <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
          <p className="text-xl font-medium">Payment Details</p>
          <p className="text-gray-400">
            Complete your order by providing your payment details.
          </p>
          <div>
            <label
              htmlFor="email"
              className="mt-4 mb-2 block text-sm font-medium"
            >
              Email
            </label>
            <div className="relative">
              <input
                type="text"
                id="email"
                name="email"
                className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                placeholder="your.email@gmail.com"
              />
            </div>
            <label
              htmlFor="card-holder"
              className="mt-4 mb-2 block text-sm font-medium"
            >
              Card Holder
            </label>
            <div className="relative">
              <input
                type="text"
                id="card-holder"
                name="card-holder"
                className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                placeholder="Your full name here"
              />
            </div>
            <label
              htmlFor="card-no"
              className="mt-4 mb-2 block text-sm font-medium"
            >
              Card Details
            </label>
            <div className="flex">
              <div className="relative w-7/12 flex-shrink-0">
                <input
                  type="text"
                  id="card-no"
                  name="card-no"
                  className="w-full rounded-md border border-gray-200 px-2 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="xxxx-xxxx-xxxx-xxxx"
                />
              </div>
              <input
                type="text"
                name="credit-expiry"
                className="w-full rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                placeholder="MM/YY"
              />
              <input
                type="text"
                name="credit-cvc"
                className="w-1/6 flex-shrink-0 rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                placeholder="CVC"
              />
            </div>
            <label
              htmlFor="billing-address"
              className="mt-4 mb-2 block text-sm font-medium"
            >
              Address
            </label>
            <div className="flex flex-col sm:flex-row">
              <div className="relative flex-shrink-0 sm:w-7/12">
                <input
                  type="text"
                  id="billing-address"
                  name="billing-address"
                  className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Street Address"
                />
              </div>
              <select
                type="text"
                name="billing-state"
                className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="State">State</option>
              </select>
              <input
                type="text"
                name="billing-zip"
                className="flex-shrink-0 rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none sm:w-1/6 focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                placeholder="ZIP"
              />
            </div>
          </div>

          <div className="mt-4 mb-2 flex justify-center ">
            <DefaultButton
              title="Continue"
              onClick={handleContinueButtonClick}
            />
          </div>
          <div className=" mb-8 flex justify-center ">
            <button
              className=" border-primary text-red-700 px-8 py-3 font-bold 
                rounded-md hover:bg-blue-950 hover:text-white cursor-grab"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {showCheckoutAddress && <CheckoutAddress />}
    </div>
  );
}

export default CheckoutForm;
