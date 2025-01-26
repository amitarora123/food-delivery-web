import React, { useRef } from 'react';
import { instructions, popularItems } from '../constants';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FoodItemCard } from './index';

function PopularItems() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const CustomNextArrow = ({ onClick }) => {
    return <button ref={nextRef} className="hidden" onClick={onClick} />;
  };
  const CustomPrevArrow = ({ onClick }) => {
    return <button ref={prevRef} className="hidden" onClick={onClick} />;
  };

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5, // Slides 5 items at a time
    arrows: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />, // Don't forget this
    responsive: [
      {
        breakpoint: 1024, // Large screens
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768, // Medium screens
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480, // Small screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="px-5 my-20 sm:px-10 bg-custom-gradient">
      <div className="py-14">
        <h1 className="text-[#F17228] text-4xl font-sourceSansProBold  text-center">
          How does it work
        </h1>
      </div>

      <div className="container px-20 mx-auto sm:px-32">
        <div className="grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2">
          {instructions.map((item, index) => (
            <div
              className="flex flex-col items-center gap-4 align-center justify-items-center"
              key={index}
            >
              <div>
                <img src={item.image} alt="" />
              </div>
              <div>
                <div>
                  <h3 className="text-base font-bold text-center">
                    {item.title}
                  </h3>
                </div>
                <div className="my-2">
                  <p className="text-[12px] text-[#424242] text-center ">
                    {item.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto my-40 ">
        <h1 className="heading">Popular items</h1>
         
          <div className="relative max-w-6xl mx-auto my-20">
            <Slider {...sliderSettings}>
              {popularItems.map((item, index) => (
                <div key={index} className="p-4">
                  <FoodItemCard {...item} />
                </div>
              ))}
            </Slider>
          </div>
      </div>
    </section>
  );
}

export default PopularItems;

