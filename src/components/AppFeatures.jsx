import React from 'react';

function AppFeatures() {
  return (
    <section className="my-20 bg-top bg-cover bg-app-features">
      <div className="container mx-auto">
        <div className="py-20 ">
          <div className="flex justify-center gap-2 p-10 mx-auto bg-white w-fit rounded-3xl max-md:flex-col ">
            <div className="">
              <div className="flex items-center gap-2 md:mr-20 custom-screen">
                <div>
                  <img src="/assets/functions/discounts.png" alt="" className='object-contain h-28 w-28'/>
                </div>
                <div className="text-2xl font-[900] text-gradient">
                  Daily
                  <br className="hidden md:block" />
                 {' '}  Discounts
                </div>
                
              </div>
            </div>
            <div className="md:border-l-2 border-[#CFCFCF] border-solid">
              <div className="flex items-center gap-2 md:mr-20 md:ml-4 custom-screen">
                <div>
                  <img src="/assets/functions/live-tracking.png" alt="" className='h-28 w-28 object-fit contain'/>
                </div>
                <div className="text-2xl  font-[900] text-gradient">
                  Live
                  <br className="hidden md:block" />
                {' '}Tracking
                </div>

              </div>
            </div>
            <div className="md:border-l-2 border-[#CFCFCF] border-solid">
              <div className="flex items-center gap-2 md:ml-4 custom-screen">
                <div>
                  <img src="/assets/functions/quick-delivery.png" alt="" className='object-contain h-28 w-28'/>
                </div>
                <div className="text-2xl font-[900] text-gradient">
                  Quick
                  <br className="hidden md:block" />
                 {' '} Delivery
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='flex justify-center gap-4 my-10 xl:px-20'>
            <div>
                <img src="/assets/functions/phone-cta-one.png" alt="phone" className='hidden md:block h-80'/>
            </div>
            <div className='my-10'>
                <div className='text-3xl font-bold text-primary'>
                    Install the app
                </div>
                <div className='my-4 text-sm'>
                <p>It's never been easier to order food. Look for the finest</p>
               
                <p>discounts and you'll be lost in a world of delectable food</p>
                </div>
                <div className='flex gap-2'>
                    <a href="#" onClick={(e)=>{e.preventDefault()}}>
                        <img src="/assets/install/app-store.svg" alt="app-store.svg" className='h-12'/>
                    </a>
                    <a href="#" onClick={(e)=>{e.preventDefault()}}>
                        <img src="/assets/install/google-play.svg" alt="google-play.svg" className='h-12'/>
                    </a>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}

export default AppFeatures;
