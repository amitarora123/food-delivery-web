import React from 'react';

function FoodItemCard({ image, name, location, price }) {
  return (
    <div>
      <div>
        <img src={image} alt={name} className="w-full rounded-xl" />
      </div>
      <div className="flex flex-col gap-2 mt-2">
        <div>
          <h2 className="font-bold">{name}</h2>
        </div>
        <div className="flex items-center justify-start gap-2 ">
          <svg
            className="w-4 h-4 svg-inline--fa fa-map-marker-alt fa-w-12"
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="map-marker-alt"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            data-fa-i2svg=""
          >
            <path
              fill="#FFB30E"
              d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"
            ></path>
          </svg>
          <p className="text-xs text-[#FFB30E]">{location}</p>
        </div>
        <div>
          <p className="text-xs font-bold">${price.toFixed(2)}</p>
        </div>
      </div>
      <div>
        <button className="w-full py-3 my-4 text-xs font-bold text-white rounded-md px-auto bg-primaryDaner">
          Order now
        </button>
      </div>
    </div>
  );
}

export default FoodItemCard;
