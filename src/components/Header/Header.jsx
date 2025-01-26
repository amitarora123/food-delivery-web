import React, { useState } from 'react';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-2 bg-white">
      <div className="flex items-center justify-between h-[4.5rem] container mx-auto  ">
        <a href="#" className="flex items-center gap-2 max-md:p-4">
          <img src="/assets/logo.svg" alt="logo" />
          <h2 className='text-2xl font-[900] text-gradient'>
            foodwaGon
          </h2>
        </a>

        <div
          className="flex w-5 h-5 mr-4 md:hidden hover:cursor-pointer "
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <img
            src={isOpen ? '/assets/close.svg' : '/assets/menu.svg'}
            alt="menu"
            className="invert"
          />
        </div>
        <div className="items-center hidden gap-2 text-sm xl:flex">
          <p className="font-bold ">Deliver to: </p>

          <div className="flex gap-2">
            <img
              src="/assets/map-marker-alt.svg"
              alt="location"
              className="w-4 h-4"
            />
            <p>Current Location</p>
          </div>
          <p className="font-bold">Mohammadpur Bus Stand, Dhaka</p>
        </div>

        <div className="items-center hidden gap-4 text-xs md:flex ">
          <div className="relative">
            <form onSubmit={() => {}}>
              <input
                type="text"
                placeholder="Search food"
                className="px-10 py-3 text-sm border-black rounded-lg outline-none drop-shadow-sm"
              />
              <img
                src="/assets/Search.svg"
                alt="search"
                className="absolute w-4 h-4 transform -translate-y-1/2 top-1/2 left-4"
              />
            </form>
          </div>

          <button className="flex items-center gap-3 px-8 py-3 transition-shadow duration-300 rounded drop-shadow-sm hover:shadow-custom">
            <img src="/assets/user.svg" alt="user" />
            <p className="text-yellowText">Login</p>
          </button>
        </div>
      </div>
      <div
        className={`${
          isOpen ? 'max-h-[500px]' : 'max-h-0 pointer-events-none'
        } overflow-hidden transition-all duration-700 ease bg-white px-4 border-b`}
      >
        <div className="py-10">
          <p className="text-sm font-bold leading-6 text-center">
            Deliver to:{' '}
            <span className="mx-2 font-normal">
              <img
                src="/assets/map-marker-alt.svg"
                alt="location"
                className="inline w-4 h-4"
              />{' '}
              Current Location
            </span>
            Mirapur 1 Bus Stand, Dhaka
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 pb-10">
          <div className="drop-shadow-sm">
            <form onSubmit={() => {}}>
              <input
                type="text"
                placeholder="Search food"
                className="px-10 py-3 text-sm border-black rounded-lg outline-none drop-shadow-sm"
              />
              <img
                src="/assets/Search.svg"
                alt="search"
                className="absolute w-4 h-4 transform -translate-y-1/2 top-1/2 left-4"
              />
            </form>
          </div>

          <button className="flex items-center gap-3 px-8 py-3 border rounded-md">
            <img src="/assets/user.svg" alt="user" />
            <p className="text-yellowText">Login</p>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
