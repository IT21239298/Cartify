import React, { useState } from "react";
import Slider from "react-slick";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Reviews = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (index) => setActiveIndex(index)
  };

 
  const reviews = [
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi, voluptas nostrum quisquam!",
      author: "Anna Morian",
      image: "https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp",
    },
    {
      text: "Neque cupiditate assumenda in maiores repudiandae mollitia adipisci maiores repudiandae mollitia consectetur adipisicing architecto elit sed adipiscing elit.",
      author: "Teresa May",
      image: "https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(31).webp",
    },
    {
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur est laborum neque cupiditate assumenda in maiores.",
      author: "Kate Allise",
      image: "https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp",
    },
  ];

  return (
    <div className="w-[350px] bg-blue-200 hover:shadow-lg drop-shadow-lg py-5 px-4 cursor-pointer flex flex-col mx-auto rounded-3xl"> 
      <Slider {...settings}>
        {reviews.map((review, index) => (
          <div key={index}>
             <div className="mb-2 mt-6 flex justify-center">
              <img
                src={review.image}
                className="h-20 w-20 rounded-full shadow-lg dark:shadow-black/30"
                alt="sample image"
              />
            </div>
            <p className="mx-auto max-w-4xl text-sm italic text-black">
              {review.text}
            </p>
           
            <p className="text-black">- {review.author}</p>

          </div>
        ))}
      </Slider>
     
    </div>
  );
};

export default Reviews;
