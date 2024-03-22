import React from "react";

function SecondaryHeader() {
  return (
    <nav className="bg-slate-100 shadow-lg hover:shadow-2xl">
      <div className="container flex">
        <div className="bg-blue-950 text-blue-950 md:flex items-center cursor-pointer relative group hidden">
          <span className="text-white">
            <i className="fa-solid fa-bars"></i>
          </span>
          <span className="px-4 capitalize ml-2 text-white">
            All Categories
          </span>

          <div className="absolute w-full left-0 top-full bg-white shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible">
            <a
              href="#"
              className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
            >
              <img
                src="assets/images/icons/sofa.svg"
                alt="sofa"
                className="w-5 h-5 object-contain"
              />
              <span className="ml-6 text-gray-600 text-sm">Sofa</span>
            </a>
            <a
              href="#"
              className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
            >
              <img
                src="assets/images/icons/terrace.svg"
                alt="terrace"
                className="w-5 h-5 object-contain"
              />
              <span className="ml-6 text-gray-600 text-sm">Terarce</span>
            </a>
            <a
              href="#"
              className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
            >
              <img
                src="assets/images/icons/bed.svg"
                alt="bed"
                className="w-5 h-5 object-contain"
              />
              <span className="ml-6 text-gray-600 text-sm">Bed</span>
            </a>
            <a
              href="#"
              className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
            >
              <img
                src="assets/images/icons/office.svg"
                alt="office"
                className="w-5 h-5 object-contain"
              />
              <span className="ml-6 text-gray-600 text-sm">office</span>
            </a>
            <a
              href="#"
              className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
            >
              <img
                src="assets/images/icons/outdoor-cafe.svg"
                alt="outdoor"
                className="w-5 h-5 object-contain"
              />
              <span className="ml-6 text-gray-600 text-sm">Outdoor</span>
            </a>
            <a
              href="#"
              className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
            >
              <img
                src="assets/images/icons/bed-2.svg"
                alt="Mattress"
                className="w-5 h-5 object-contain"
              />
              <span className="ml-6 text-gray-600 text-sm">Mattress</span>
            </a>
          </div>
        </div>

        <div className="flex items-center justify-between flex-grow ">
          <div className="flex items-center space-x-20 capitalize">
            <button className=" px-20 py-8 font-bold text-justify text-blue-950 w-30 h-10 hover:bg-blue-950 hover:bg-cover hover:text-white transition">
              Home
            </button>
            <button className=" px-20 py-8 font-bold text-justify text-blue-950 w-30 h-10 hover:bg-blue-950 hover:bg-cover hover:text-white transition">
              <a href="/shop">Shop</a>
            </button>

            <button className=" px-5 py-8 font-bold text-justify text-blue-950 w-30 h-10 hover:bg-blue-950 hover:bg-cover hover:text-white transition">
              <a href="#">About us</a>
            </button>
            <button className=" px-20 py-8 font-bold text-justify text-blue-950 w-30 h-10 hover:bg-blue-950 hover:bg-cover hover:text-white transition">
              <a
                href="/ContactUs"
                className="font-bold text-blue-950 hover:text-white transition"
              >
                Contact us
              </a>
            </button>
          </div>
          {/* <a href="pages/login.html" className="text-gray-200 hover:text-white transition">Login</a> */}
        </div>
      </div>
    </nav>
  );
}

export default SecondaryHeader;
