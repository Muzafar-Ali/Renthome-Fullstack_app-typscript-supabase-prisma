import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'
import React from 'react'

const StandoutPage = ({ params }: { params: { id: string } })=> {
  
  return (
    <>
      <div className='flex items-center mx-5 md:mx-20 pb-[100px] md:pb-[120px] relative mt-10'>
        {/* Big screen */}
        <div className='hidden lg:grid grid-cols-1 lg:grid-cols-2 gap-10 items-center '>
          <div className='flex flex-col gap-4'>
            <p className='text-2xl text-brand_black font-bold'>Step 2</p>
            <h1 className='text-4xl font-bold text-brand_black'>Make your place stand out</h1>
            <p className='text-base md:text-xl text-brand_black'>
              In this step, you'll add some of the amenities your place offers, plus 5 or more photos.
              Then, you'll create a title and description
            </p>
          </div>
          <div className='pb-10 md:pb-20 lg:pb-0'>
            <video src='/about-place.mp4' autoPlay controls={false} muted />
          </div>
        </div>
        {/* small screen */}
        <div className='grid grid-cols-1 lg:grid-cols-2 items-center lg:hidden'>
          <div className=''>
            <video src='/about-place.mp4' autoPlay controls={false} muted />
          </div>
          <div className='flex flex-col gap-4 text-black'>
            <p className='text-base text-brand_black font-bold'>Step 2</p>
            <h1 className='text-3xl text-brand_black font-bold'>Make your place stand out</h1>
            <p className='text-base md:text-xl text-brand_black'>
              In this step, you'll add some of the amenities your place offers, plus 5 or more photos.
              Then, you'll create a title and description
            </p>
          </div>
        </div>
      </div>
      {/* button section, back and next */}
      <div className="fixed w-full bottom-0 z-10 bg-white h-16 md:h-24">
        <Separator className="mx-auto w-full h-1" />      
        <div className="flex items-center justify-between mx-auto px-5 lg:px-10 h-full">
          <Link href={`/create/${params.id}/place-type`}>
            <Button variant="secondary" size="lg" className="max-md:h-9 max-md:rounded-md max-md:px-3"> Back </Button>
          </Link>
          <Link href={`/create/${params.id}/amenities`}>
            <Button size="lg" className="max-md:h-9 max-md:rounded-md max-md:px-3 text-base font-bold"> Next </Button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default StandoutPage


