import React from 'react'
import banner from "../../assets/images/banner-bg-1.jpg"
import DefaultButton from './DefaultButton'

// background-image: url('assets/images/banner-bg.jpg');
function Banner() {
    return (
        <div className="bg-cover bg-no-repeat bg-center py-36 " style={{backgroundImage: `url(${banner})`}}>
            <div className="container">
                <h1 className="text-6xl text-gray-800 font-medium mb-4 capitalize text-left">
                    best collection for <br /> home decoration
                </h1>
                <p className='text-left'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam <br />
                    accusantium perspiciatis, sapiente
                    magni eos dolorum ex quos dolores odio</p>
                <div className="mt-12 text-left">
                   <DefaultButton title={'Shop Now'} />
                </div>
            </div>
        </div>
    )
}

export default Banner
