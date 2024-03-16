import React, { useState } from 'react'

import SecondaryButton from './SecondaryButton';

function ImageScanner() {

    const [image, setImage] = useState(null)
    const [loading, setLoading] = useState(false)

    const handleDrop = (e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };


    return (
        <div className='flex mt-10'>
            <div
                className="flex items-center justify-center h-64 border-dashed border-2 border-gray-400 p-4 ml-20 mr-20 mb-20"
                onDrop={handleDrop}
                onDragOver={handleDragOver}
            >
                {image ? (
                    <img src={image} alt="Uploaded" className="object-cover w-100 h-full" />
                ) : (
                    <p className="text-center">Drag & Drop your image</p>
                )}
            </div>
            <div className=''>
                <div className='text-lg text-black font-semibold mr-10 mb-10'>
                    <h1 className='text-5xl'>Transform your shopping experience</h1> <br /> <span className='font-normal'>simply scan and drag & drop your image to discover relevant categories <br /> tailored just for you!</span>
                </div>
                <SecondaryButton onClick={() =>  {}} title={'Scan Now'} />
            </div>

        </div>

    )
}

export default ImageScanner
