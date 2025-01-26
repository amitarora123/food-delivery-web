import React from 'react'

function DiscountCard({image, discount, name, time}) {
  return (
    <div className="">
          <div className="relative overflow-hidden rounded-xl">
            <img
              src={image}
              alt={name}
              className="rounded-xl "
            />
            <div className="absolute -bottom-[10px] -left-[10px] px-8 py-4 pb-6 text-white font-sourceSansProBold rounded-xl bg-primary">
              <div className="flex items-center justify-center text-xl leading-4 z-4">
                <div className="inline text-6xl">{discount}</div>
                <div className="inline-block">
                  <div>%</div>
                  <div>off</div>
                </div>
              </div>
            </div>
          </div>
          <div className='my-2'>
            <div>
              <h2 className="my-2 text-lg font-sourceSansProBold ">
                Flat Hill Slingback
              </h2>
            </div>
            <div className="bg-[#fdeadf] text-[#F17228]  font-sourceSansProBold text-lg px-4 rounded-md py-1 inline">
              {time} Remaning
            </div>
          </div>
        </div>
  )
}

export default DiscountCard