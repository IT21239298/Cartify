import React from 'react'

function SecondaryHeader() {
  return (
    <nav className="bg-gray-800">
        <div className="container flex">
            <div className="px-8 py-4 bg-primary md:flex items-center cursor-pointer relative group hidden">
                <span className="text-white">
                    <i className="fa-solid fa-bars"></i>
                </span>
                <span className="capitalize ml-2 text-white">All Categories</span>

             
                <div
                    className="absolute w-full left-0 top-full bg-white shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible">
                    <a href="#" className="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                        <img src="assets/images/icons/sofa.svg" alt="sofa" className="w-5 h-5 object-contain" />
                        <span className="ml-6 text-gray-600 text-sm">Sofa</span>
                    </a>
                    <a href="#" className="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                        <img src="assets/images/icons/terrace.svg" alt="terrace" className="w-5 h-5 object-contain" />
                        <span className="ml-6 text-gray-600 text-sm">Terarce</span>
                    </a>
                    <a href="#" className="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                        <img src="assets/images/icons/bed.svg" alt="bed" className="w-5 h-5 object-contain" />
                        <span className="ml-6 text-gray-600 text-sm">Bed</span>
                    </a>
                    <a href="#" className="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                        <img src="assets/images/icons/office.svg" alt="office" className="w-5 h-5 object-contain" />
                        <span className="ml-6 text-gray-600 text-sm">office</span>
                    </a>
                    <a href="#" className="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                        <img src="assets/images/icons/outdoor-cafe.svg" alt="outdoor" className="w-5 h-5 object-contain" />
                        <span className="ml-6 text-gray-600 text-sm">Outdoor</span>
                    </a>
                    <a href="#" className="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                        <img src="assets/images/icons/bed-2.svg" alt="Mattress" className="w-5 h-5 object-contain" />
                        <span className="ml-6 text-gray-600 text-sm">Mattress</span>
                    </a>
                </div>
            </div>

            <div className="flex items-center justify-between flex-grow md:pl-12 py-5">
                <div className="flex items-center space-x-6 capitalize">
                    <a href="/" className="text-gray-200 hover:text-white transition">Home</a>
                    <a href="/shop" className="text-gray-200 hover:text-white transition">Shop</a>
                    <a href="#" className="text-gray-200 hover:text-white transition">About us</a>
                    <a href="#" className="text-gray-200 hover:text-white transition">Contact us</a>
                </div>
                {/* <a href="pages/login.html" className="text-gray-200 hover:text-white transition">Login</a> */}
            </div>
        </div>
    </nav>
  )
}

export default SecondaryHeader
