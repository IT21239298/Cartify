import React, { useState } from "react";
import DefaultButton from "../components/home/DefaultButton";
import location from "../assets/images/location.png"


function CheckoutAddress() {
  const [showAddressForm, setShowAddressForm] = useState(false);

  return (
    <div>
      <div className="px-4 pt-4">
        <p className="mt-8 text-lg font-bold ">
          Where should we deliver your order ?
        </p>
      </div>

      {/* Render the radio buttons form */}
      <form className={`mt-5 grid gap-6 ${showAddressForm ? "hidden" : ""}`}>
        <div className="relative">
          <input
            className="peer hidden"
            id="radio_3"
            type="radio"
            name="radio"
            checked
          />
          <span className="peer-checked:border-blue-800 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-blue-300 bg-white"></span>
          <label
            className="peer-checked:border-2 peer-checked:border-blue-700 peer-checked:bg-blue-50 flex cursor-pointer select-none rounded-lg border border-blue-300 p-4"
            htmlFor="radio_3"
          >
            <img
              className="w-14 object-contain"
              src={location}
              alt=""
            />
            <div className="ml-5">
              <span className="mt-2 font-semibold">Anuradhapura</span>
              <p className="text-slate-500 text-sm leading-6">134/2 Kurunagala Road, Thalwa</p>
            </div>
          </label>
        </div>
        <div className="relative">
          <input
            className="peer hidden"
            id="radio_4"
            type="radio"
            name="radio"
            checked
          />
           <span className="peer-checked:border-blue-800 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-blue-300 bg-white"></span>
          <label
            className="peer-checked:border-2 peer-checked:border-blue-700 peer-checked:bg-blue-50 flex cursor-pointer select-none rounded-lg border border-blue-300 p-4"
            htmlFor="radio_4"
          >
            <img
              className="w-14 object-contain"
              src={location}
              alt=""
            />
            <div className="ml-5">
            <span className="mt-2 font-semibold">Anuradhapura</span>
              <p className="text-slate-500 text-sm leading-6">134/2 Kurunagala Road, Thalwa</p>
            </div>
          </label>
        </div>
      </form>

      {/* Button to show address form */}
      <p
        onClick={() => setShowAddressForm(!showAddressForm)}
        className={` text-blue-800 underline py-6 ml-32 cursor-pointer font-bold  ${
          showAddressForm ? "hidden" : ""
        }`}
      >
        Use another address
      </p>

      {/* Address form */}
      {showAddressForm && (
        <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
          <p className="text-xl font-medium">Address Details</p>
          <p className="text-gray-400">
            Complete your order by providing your Address details.
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
              Name
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
              htmlFor="card-holder"
              className="mt-4 mb-2 block text-sm font-medium"
            >
              Contact Number
            </label>
            <div className="relative">
              <input
                type="text"
                id="card-holder"
                name="card-holder"
                className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                placeholder="Your contact name here"
              />
            </div>

            <label
              htmlFor="billing-address"
              className="mt-4 mb-2 block text-sm font-medium"
            >
              Delivery Address
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
              onClick={() => setShowAddressForm(!showAddressForm)}
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
    </div>
  );
}

export default CheckoutAddress;
