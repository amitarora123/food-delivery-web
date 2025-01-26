import React from 'react';

function BottomContainer() {
  return (
    <section className="mt-20">
      <div className="container px-10 mx-auto lg:px-20 ">
        <div className="grid-cols-5 my-20 mb-2 rounded-lg shadow-2xl md:grid grid-flow-dense">
          <div className="order-1 md:order-2 max-sm:row-span-1 md:col-span-2 xl:col-span-3 col-span-full">
            <img
              src="assets/bottom-cards/crispy-sandwiches.png"
              alt="crispy-sandwich"
              className="object-cover w-full h-full rounded-t-lg md:rounded-r-lg"
            />
          </div>
          <div className="order-2 md:order-1 md:col-span-3 max-sm:row-span-2 xl:col-span-2 col-span-full">
            <div className="px-8 py-2 md:mt-20">
              <div className="mb-8">
                <h1 className="text-[1.8rem] md:text-[2rem] font-bold leading-[45px] text-primary">
                  <p className="inline text-black">Best deals</p> Crispy
                  Sandwiches
                </h1>
              </div>
              <div className="mb-10">
                <p className="text-[15px]">
                  Enjoy the large size of sandwiches. Complete your meal with
                  the perfect slice of sandwiches.
                </p>
              </div>
              <div className="mb-10 md:mt-16">
                <button className="flex max-md:w-full justify-center items-center lg:px-20 px-8 py-2 text-[13px] font-bold text-white rounded bg-primary">
                  PROCEED TO ORDER
                  <img
                    src="assets/angle-right.svg"
                    alt="right"
                    className="w-4 h-4"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="grid-cols-5 my-20 mb-2 rounded-lg shadow-2xl md:grid max-sm:grid-rows-3 max-md:grid-rows-2 grid-flow-dense">
          <div className="order-1 max-sm:row-span-1 md:col-span-2 xl:col-span-3 col-span-full">
            <img
              src="assets/bottom-cards/fried-chicken.png"
              alt="fried-chicken"
              className="object-cover w-full h-full rounded-t-lg md:rounded-l-lg"
            />
          </div>
          <div className="order-2 h-fit max-sm:row-span-2 md:col-span-3 xl:col-span-2 col-span-full">
            <div className="px-8 py-2 md:mt-20">
              <div className="mb-8">
                <h1 className=" text-3xl md:text-[2rem] font-bold md:leading-[45px] text-primary">
                  <p className="inline text-black">Celebrate parties with</p>{' '}
                  Fried Chicken
                </h1>
              </div>
              <div className="mb-10">
                <p className="text-[15px]">
                  Get the best fried chicken smeared with a lip smacking lemon
                  chili flavor. Check out best deals for fried chicken.
                </p>
              </div>
              <div className="mb-10 md:mt-16">
                <button className="flex max-md:w-full justify-center items-center px-8 lg:px-20 py-2 text-[13px] font-bold text-white rounded bg-primary">
                  PROCEED TO ORDER
                  <img
                    src="assets/angle-right.svg"
                    alt="right"
                    className="w-4 h-4"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid-cols-5 my-20 mb-2 rounded-lg shadow-2xl md:grid max-sm:grid-rows-3 max-md:grid-rows-2 grid-flow-dense">
          <div className="order-1 max-sm:row-span-1 md:order-2 md:col-span-2 xl:col-span-3 col-span-full">
            <img
              src="assets/bottom-cards/pizza.png"
              alt="pizza"
              className="object-cover w-full h-full rounded-t-lg md:rounded-r-lg"
            />
          </div>
          <div className="order-2 max-sm:row-span-2 md:order-1 md:col-span-3 xl:col-span-2 col-span-full">
            <div className="px-8 py-2 md:mt-20">
              <div className="mb-8">
                <h1 className="text-3xl md:text-[2rem] font-bold md:leading-[45px] text-primary">
                  <p className="inline text-black">Wanna eat hot &</p> spicy
                  Pizza?
                </h1>
              </div>
              <div className="mb-10">
                <p className="text-[15px]">
                  Pair up with a friend and enjoy the hot and crispy pizza pops.
                  Try it with the best deals.
                </p>
              </div>
              <div className="mb-10 md:mt-16">
                <button className="flex max-md:w-full justify-center items-center lg:px-20 px-8 py-2 text-[13px] font-bold text-white rounded bg-primary">
                  PROCEED TO ORDER
                  <img
                    src="assets/angle-right.svg"
                    alt="right"
                    className="w-4 h-4"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 bg-cover bg-bottom-background">
        <div className="flex flex-col items-center justify-center gap-4 py-20 font-bold">
          <h1 className="text-4xl text-center text-white leading-[50px]">
            Are you ready to order
            <br />
            with the best deals?
          </h1>

          <button className="flex items-center px-10 py-3 text-xs text-white rounded bg-primaryDaner">
            PROCEED TO ORDER
            <img src="/assets/angle-right.svg" alt="right-angle" className='w-4 h-4'/>
          </button>
        </div>
      </div>
    </section>
  );
}

export default BottomContainer;
