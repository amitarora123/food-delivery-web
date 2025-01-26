import React, {useRef} from 'react';
import { foodCatagories } from '../constants';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function FoodCatagories() {
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
    slidesToShow: 6,
    slidesToScroll: 6, // Slides 5 items at a time
    arrows: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />, // Don't forget this
    responsive: [
      {
        breakpoint: 1200, // Large screens
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
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
          slidesToShow: 3,
          slidesToScroll: 3,
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
    <section className="px-5 my-20 sm:px-10">
      <div className="container mx-auto">
        <div className="flex flex-col items-center md:flex-row md:justify-between gap-y-4">
          <h1 className="heading">Search by Food</h1>

          <div className="flex items-center  w-full mt-auto flex-col md:flex-row md:gap-8 md:w-[18rem]">
            <button className="flex gap-1 transition-all duration-300 hover:underline">
              {' '}
              <p className="text-sm font-bold">VIEW ALL</p>
              <svg
                fill="#000000"
                width="800px"
                height="800px"
                viewBox="-128 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
              >
                <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" />
              </svg>
            </button>

            <div className="flex justify-between gap-4 max-md:w-full md:justify-center">
              <button onClick={() => {prevRef.current.click()}} className="p-2 rounded-full bg-primary hover:opacity-[0.8] transition-opacity duration-300">
                <img src="/assets/angle-left.svg" alt="" className="w-6 h-6" />
              </button>

              <button className="p-2 rounded-full bg-primary hover:opacity-[0.8] transition-opacity duration-300"
              onClick={() => {
                nextRef.current.click();
              }}>
                <img src="/assets/angle-right.svg" alt="" className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
        <div className="px-10 my-20 md:px-20 ">
          <Slider {...sliderSettings}>
            {foodCatagories.map(({ image, name }, index) => (
              <a key={index} className='p-4' href='#' onClick={(e)=>{e.preventDefault()}}>
                <div>
                  <img src={image} alt={name} className="mx-auto rounded-full" />
                </div>
                <div className="my-2 font-bold text-center ">{name}</div>
              </a>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default FoodCatagories;
