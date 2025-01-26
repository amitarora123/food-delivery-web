import React from 'react'
import {RestaurentCard} from './index'
import { featuredRestaurents } from '../constants'

function FeaturedRestaurent() {
  return (
    <section className='px-5 my-20 sm:px-10'>
      <div className='container mx-auto'>
        <h1 className='heading'>Featured Restaurent</h1>

          <div className='grid grid-cols-1 gap-4 px-10 my-20 sm:px-20 sm:grid-cols-2 lg:grid-cols-4'>
            {featuredRestaurents.map((item, index) => (
              <div key={index}>
                 <RestaurentCard {...item}/>
                 </div>
            ))}
          </div>
            <div className='text-center'>
              
          <button className='px-8 py-2 text-xs font-bold text-white rounded-md bg-primary'>
            View All 
            <img src="/assets/angle-right.svg" alt="" className='inline w-5 h-5 ' />
          </button>
            </div>
      </div>
      
    </section>
  )
}

export default FeaturedRestaurent