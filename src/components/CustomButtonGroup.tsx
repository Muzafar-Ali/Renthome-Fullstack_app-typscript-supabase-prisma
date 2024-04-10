import { ChevronLeft } from 'lucide-react';
import React from 'react'

const CustomButtonGroup = ({ next, previous, goToSlide, ...rest }: any) => {
  
  const { carouselState: { currentSlide } } = rest;
 
  return (
    <div>
      { currentSlide > 0 && (
         <div className="shadow-custom2 rounded-full w-[30px] md:w-[35px] h-[30px] md:h-[35px] p-1 bg-white border border-stone-400 justify-center items-center inline-flex absolute top-[16%] left-[6%]">
           <button className="w-4 md:w-8 h-4 md:h-8 justify-center items-center flex" onClick={() => previous()}>
             <ChevronLeft strokeWidth={2.5} className="w-6 md:w-[20px] h-6 md:h-[20px] bg-transparent" />
           </button>
         </div>
       )}
 
       
      <div className="shadow-custom2 rounded-full w-[30px] md:w-[35px] h-[30px] md:h-[35px] p-1 bg-white border border-stone-400 justify-center items-center inline-flex absolute top-[16%] right-[6%]">
        <button className="w-4 md:w-8 h-4 md:h-8 justify-center items-center flex" onClick={() => next()}>
          <ChevronLeft strokeWidth={2.5} className="w-6 md:w-[20px] h-6 md:h-[20px] rotate-180 bg-transparent" />
        </button>
      </div>
       
    </div>
  );
};

export default CustomButtonGroup
