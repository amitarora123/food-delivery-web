import React from 'react';

function RestaurentCard({ image, name, rating, discount, logo, opening }) {
  return (
    <div className='w-full'>
      <div className="relative ">
        <div className='w-full'>
          <img src={image} alt={name} className='w-full rounded-xl'/>
        </div>

        <div className="absolute flex gap-2 text-xs font-bold top-4 left-4">
          <button className='px-2 text-white rounded-md bg-primaryDaner'>
            <img src="/assets/discount.svg" alt="discount" className='inline w-4 h-4 mr-2 align-middle'/>
            {discount}% off
          </button>
          <button className='p-2 text-white rounded-md bg-primary'>
            <img src="/assets/clock.svg" alt="clock" className='inline w-4 h-4 mr-2'/>
            Fast
          </button>
        </div>
      </div>
      <div className='flex flex-col my-4'>
        <div className='flex gap-4'>
          <span className='inline'>
            <img src={logo} alt="logo" />
          </span>
          <span>
            <p className='my-2 text-base font-bold'>{name}</p>
            <p className='text-xs text-primary'>
              <img src="assets/star.svg" alt="star" className='inline w-4 h-4 mr-2'/>
              {rating}
            </p>
          </span>
        </div>
        <div className='my-4'>
          <div
            className={`${
              opening === 'Open Now'
                ? 'bg-softSuccess text-success'
                : 'bg-bgSoftDanger text-primaryDaner '
            } font-bold px-2 py-1 rounded-lg w-fit text-sm`}
          >
            {opening}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RestaurentCard;
