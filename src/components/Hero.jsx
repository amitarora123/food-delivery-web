import React, { useState } from 'react';

function Hero() {
  const [change, setChange] = useState(false);

  return (
    <section className=" mt-[4.5rem]">
      <div className="w-full bg-primary">
        <div className="container grid grid-cols-1 mx-auto md:grid-flow-dense md:grid-cols-2 ">
          <div className="order-2 md:order-1">
            <div className="px-4 py-20">
              <div className="mb-4">
                <h1 className="mb-2 text-white xl:text-[4rem] lg:text-5xl md:text-[2.5rem] sm:text-[4rem] font-sourceSansProBold">
                  Are you starving?
                </h1>
                <p className=" text-3xl text-[#616161] font-sourceSansProBold">
                  Within a few clicks, find meals that
                  <br className="max-xl:hidden" />
                  are accessible near you
                </p>
              </div>
              <div className="w-full px-4 py-4 mt-16 bg-white rounded-lg shadow-md">
                <div className="flex gap-4 py-2 border-b">
                  <button
                    className={` px-4 py-2 flex gap-2 rounded-md text-sm ${
                      change
                        ? 'text-[#1a1a1a]'
                        : 'text-[#F17228] bg-[rgb(241,114,40,0.15)]'
                    }`}
                    onClick={() => {
                      setChange((prev) => !prev);
                    }}
                  >
                    <svg
                      aria-hidden="true"
                      className="w-4 h-4 svg-inline--fa fa-motorcycle fa-w-20 me-2"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="motorcycle"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 512"
                      data-fa-i2svg=""
                    >
                      <path
                        fill="currentColor"
                        d="M512.9 192c-14.9-.1-29.1 2.3-42.4 6.9L437.6 144H520c13.3 0 24-10.7 24-24V88c0-13.3-10.7-24-24-24h-45.3c-6.8 0-13.3 2.9-17.8 7.9l-37.5 41.7-22.8-38C392.2 68.4 384.4 64 376 64h-80c-8.8 0-16 7.2-16 16v16c0 8.8 7.2 16 16 16h66.4l19.2 32H227.9c-17.7-23.1-44.9-40-99.9-40H72.5C59 104 47.7 115 48 128.5c.2 13 10.9 23.5 24 23.5h56c24.5 0 38.7 10.9 47.8 24.8l-11.3 20.5c-13-3.9-26.9-5.7-41.3-5.2C55.9 194.5 1.6 249.6 0 317c-1.6 72.1 56.3 131 128 131 59.6 0 109.7-40.8 124-96h84.2c13.7 0 24.6-11.4 24-25.1-2.1-47.1 17.5-93.7 56.2-125l12.5 20.8c-27.6 23.7-45.1 58.9-44.8 98.2.5 69.6 57.2 126.5 126.8 127.1 71.6.7 129.8-57.5 129.2-129.1-.7-69.6-57.6-126.4-127.2-126.9zM128 400c-44.1 0-80-35.9-80-80s35.9-80 80-80c4.2 0 8.4.3 12.5 1L99 316.4c-8.8 16 2.8 35.6 21 35.6h81.3c-12.4 28.2-40.6 48-73.3 48zm463.9-75.6c-2.2 40.6-35 73.4-75.5 75.5-46.1 2.5-84.4-34.3-84.4-79.9 0-21.4 8.4-40.8 22.1-55.1l49.4 82.4c4.5 7.6 14.4 10 22 5.5l13.7-8.2c7.6-4.5 10-14.4 5.5-22l-48.6-80.9c5.2-1.1 10.5-1.6 15.9-1.6 45.6-.1 82.3 38.2 79.9 84.3z"
                      ></path>
                    </svg>
                    Delivery
                  </button>
                  <button
                    onClick={() => {
                      setChange((prev) => !prev);
                    }}
                    className={` px-4 py-2 rounded-md text-sm flex gap-2 ${
                      change
                        ? 'text-[#F17228] bg-[rgb(241,114,40,0.15)]'
                        : 'text-[#1a1a1a] '
                    }`}
                  >
                    <svg
                      className="w-4 h-4 svg-inline--fa fa-shopping-bag fa-w-14 me-2"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="shopping-bag"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      data-fa-i2svg=""
                    >
                      <path
                        fill="currentColor"
                        d="M352 160v-32C352 57.42 294.579 0 224 0 153.42 0 96 57.42 96 128v32H0v272c0 44.183 35.817 80 80 80h288c44.183 0 80-35.817 80-80V160h-96zm-192-32c0-35.29 28.71-64 64-64s64 28.71 64 64v32H160v-32zm160 120c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zm-192 0c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24z"
                      ></path>
                    </svg>
                    Pickup
                  </button>
                </div>
                <div className="flex gap-4 mt-4">
                  <div className="relative flex-1">
                    <input
                      type="text"
                      placeholder="Enter Your Address"
                      className="outline-none px-10 w-full py-2 bg-[#f5f5f5] text-sm"
                    />
                    <img
                      src="assets/map-marker-alt.svg"
                      alt="location"
                      className="absolute w-4 h-4 -translate-y-1/2 text-[#F17228] left-4 top-1/2"
                    />
                  </div>
                  <div>
                    <button className="bg-[#F17228] font-sourceSansProBold  text-sm text-white py-2 px-6 ">
                      Find Food
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-center order-1 p-10 md:order-2 justify-items-center">
            <img
              src="/assets/hero-header.png"
              alt=""
              className="xl:h-[400px] lg:h-[350px] h-[300px]    xl:hover:-translate-y-8 transition-transform duration-700 ease-in-out hover:cursor-pointer  align-middle"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
