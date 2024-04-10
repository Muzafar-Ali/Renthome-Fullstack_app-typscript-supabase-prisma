'use client'
import { useCallback } from 'react'
import { categoryItems } from '@/utils/data';
import { usePathname, useSearchParams } from 'next/navigation';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import CustomButtonGroup from '../CustomButtonGroup';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Wrapper from '../Wrapper';

const Categories = () => {

  const responsive = {
    desktopLarge: {
      breakpoint: { max: 3000, min: 1440 },
      items: 15,
      slidesToSlide: 4 // Slide 4 items at a time
    },
    desktopMedium: {
      breakpoint: { max: 1439, min: 1201 },
      items: 11,
      slidesToSlide: 4 // Slide 4 items at a time
    },
    desktopSmall: {
      breakpoint: { max: 1200, min: 1024 },
      items: 10,
      slidesToSlide: 4 // Slide 4 items at a time
    },
    tabletLarge: {
      breakpoint: { max: 1023, min: 901 },
      items: 9,
      slidesToSlide: 3 // Slide 4 items at a time
    },
    tabletMedium: {
      breakpoint: { max: 900, min: 851 },
      items: 8,
      slidesToSlide: 3 // Slide 4 items at a time
    },
    tabletsSmall: {
      breakpoint: { max: 850, min: 768 },
      items: 7,
      slidesToSlide: 3 // Slide 4 items at a time
    },
    mobileLagre: {
      breakpoint: { max: 767, min: 551 },
      items: 6,
      slidesToSlide: 2 // Slide 4 items at a time
    },
    mobileMedium: {
      breakpoint: { max: 550, min: 501 },
      items: 5, // Adjust the number of items as needed
      slidesToSlide: 1 // Adjust the number of slides to slide as needed
    },
    mobile: {
      breakpoint: { max: 500, min: 425 },
      items: 4, // Adjust the number of items as needed
      slidesToSlide: 1 // Adjust the number of slides to slide as needed
    },
    small: {
      breakpoint: { max: 424, min: 0 },
      items: 3,
      slidesToSlide: 2 // Slide 4 items at a time
    },
  };

const searchParams = useSearchParams();
const search = searchParams.get("category");

const pathName = usePathname();

// Helper function to dynamically update the query parameters of the current URL
const createQueryString = useCallback((name: string, value: string) => {
  const params = new URLSearchParams(searchParams.toString());
  params.set(name, value);
  return params.toString();
},[searchParams]);

  return (
    <Wrapper className='mt-5 px-[40px] lg:px-[80px]'>
      
      <Carousel 
        responsive={responsive} 
        containerClass="" 
        itemClass="px-[5px]"
        arrows={false}
        transitionDuration={250}
        customButtonGroup={<CustomButtonGroup/>}
        renderButtonGroupOutside={true}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        >
        {categoryItems.map((item, index) => (
          <div key={index}>
            <Link
              key={item.id}
              href={`${pathName}?${createQueryString("category", item.name)}`}
              className={cn(
                search === item.name ? "border-b-2 border-black pb-2 flex-shrink-0": "opacity-70 flex-shrink-0", 
                "flex flex-col gap-y-3 items-center hover:border-b-2 hover:border-black/[0.2] pb-2"
              )}
            >
              <div className="relative w-6 h-6">
                <Image
                  src={item.imageUrl}
                  alt="Category image"
                  className="w-6 h-6"
                  width={24}
                  height={24}
                  />
              </div>
              <p className="text-brand_black text-xs font-medium">{item.title}</p>
            </Link>
          </div>
        ))}
      </Carousel>

    </Wrapper>
  );
}

export default Categories