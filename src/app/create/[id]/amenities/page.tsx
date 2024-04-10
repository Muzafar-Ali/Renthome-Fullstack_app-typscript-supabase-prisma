
import { createAmenities } from '@/app/actions'
import Amenties from '@/components/createHome/amenities/Amenties'
import SafetyItems from '@/components/createHome/amenities/SafetyItems'
import StandoutAmenties from '@/components/createHome/amenities/StandoutAmenties'
import NextSubmitButton from '@/components/submitButtons/NextSubmitButton'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const AmenitiesPage = ({ params }: { params: { id: string } }) => {
  return (
    <div className='mt-4'>
      <div className=''>
        <form action={createAmenities} className='flex flex-col gap-y-10'>
          <input type="hidden" name="homeId" value={params.id} />
          
          <div className='px-5 md:px-20 lg:px-40 xl:px-0 xl:w-3/5 mx-auto cursor-pointer '>
            <div className='flex flex-col items-start justify-start gap-2 mb-10 w-full'>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight transition-colors w-full"> Tell guests what your place has to offer</h2> 
              <p className='text-base sm:text-lg text-brand_gray'>You can add more amenities after you publish your listing</p>
            </div>
            <Amenties/>
          </div>
          
          <div className='px-5 md:px-20 lg:px-40 xl:px-0 xl:w-3/5 mx-auto cursor-pointer '>
            <div className='flex flex-col items-start justify-start gap-2 mb-10 w-full'>
              <h2 className='text-xl md:text-2xl font-semibold'>Do you have any standout amenities?</h2>
            </div>
            <StandoutAmenties/>
          </div>

          <div className='px-5 md:px-20 lg:px-40 xl:px-0 xl:w-3/5 mx-auto cursor-pointer '>
            <div className='flex flex-col items-start justify-start gap-2 mb-10 w-full'>
              <h2 className='text-xl md:text-2xl font-semibold'>Do you have any of these safety items?</h2>
            </div>
            <SafetyItems/>
          </div>
          
          {/* button section, back and next */}
          <div className="fixed w-full bottom-0 z-10 bg-white border-t h-16 md:h-24">
            <div className="flex items-center justify-between mx-auto px-5 lg:px-10 h-full">
              <Link href={`/create/${params.id}/standout`}>
                <Button variant="secondary" size="lg" className="max-md:h-9 max-md:rounded-md max-md:px-3"> Back </Button>
              </Link>
              <NextSubmitButton/>
            </div>
          </div>
        </form> 
      </div>
    </div>
  )
}

export default AmenitiesPage