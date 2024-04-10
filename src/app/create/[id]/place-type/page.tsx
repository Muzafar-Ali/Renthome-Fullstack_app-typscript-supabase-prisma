import { createPlaceType } from '@/app/actions'
import PlaceType from '@/components/createHome/PlaceType'
import NextSubmitButton from '@/components/submitButtons/NextSubmitButton'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'
import React from 'react'

const PlaceTypePage = ({ params }: { params: { id: string } }) => {
  return (
    <div className='mt-4'>
      <div className='py-10'>
        <div className=''>
          <form action={createPlaceType}>
            <input type="hidden" name="homeId" value={params.id} />
            <PlaceType/>
            {/* button section, back and next */}
            <div className="fixed w-full bottom-0 z-10 bg-white border-t h-16 md:h-24">
              <Separator className="mx-auto w-full h-1" />
              <div className="flex items-center justify-between mx-auto px-5 lg:px-10 h-full">
                <Link href={`/create/${params.id}/category`}>
                  <Button variant="secondary" size="lg" className="max-md:h-9 max-md:rounded-md max-md:px-3"> Back </Button>
                </Link>
                <NextSubmitButton/>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default PlaceTypePage