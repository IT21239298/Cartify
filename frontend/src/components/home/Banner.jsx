import React from 'react';
import banner from '../../assets/images/bg1.png';
import DefaultButton from './DefaultButton';

function Banner() {
    return (
        <div className="bg-blue-300 py-8">
            <div className="container flex items-center justify-between mx-auto px-4">
                <div className="w-1/2">
                    <h1 className="text-6xl font-sans text-gray-800 text-justify font-medium mb-4 capitalize">
                    Explore, Shop Now <br/>  and Save!
                    </h1>
                    <p className="font-sans text-gray-700 text-lg text-justify mb-8">Explore our extensive and diverse range of high-quality products, shop now to discover exceptional deals, and save big on your favorite items with our exclusive special offers and discounts.</p>
                    <div >
                        <DefaultButton  title="Shop Now" />
                    </div>
                </div>
                <div className="w-1/2 flex justify-end ">
                    <img src={banner} alt="Banner" className="max-w-full h-1000" />
                </div>
            </div>
        </div>
    );
}

export default Banner;
