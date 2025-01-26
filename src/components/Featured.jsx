import React from 'react';
import DiscountCard from './cards/DiscountCard';
import { discountItems } from '../constants';


function Featured() {
  return (
    <section className="container px-5 mx-auto my-20 sm:px-20">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 justify-items-center sm:grid-cols-2">
        {discountItems.map((item, index) => (
            <div key={index}>
                <DiscountCard {...item}/>
                 </div>
        )) }
      </div>
    </section>
  );
}

export default Featured;
