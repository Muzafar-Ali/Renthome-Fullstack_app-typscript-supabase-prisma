"use client"
import React, { useState } from 'react'
import { standout_amenities } from '@/utils/data'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import Image from 'next/image'
import { cn } from '@/lib/utils'

const StandoutAmenties = () => {

  const [selectedStandouAmenties, setSelecteStandoutdAmenties] = useState<string[]>([])

  const handleStandoutAmenties = (name: string) => {
    
    if (selectedStandouAmenties.includes(name)) {
      setSelecteStandoutdAmenties(selectedStandouAmenties.filter((amenity) => amenity !== name))
    }

    if(!selectedStandouAmenties.includes(name)) {
      setSelecteStandoutdAmenties([name, ...selectedStandouAmenties])
    }
  
  }
  
  return (
    <div className="grid gird grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
      <input type="hidden" name='standoutAmenties' value={selectedStandouAmenties} />
      { standout_amenities.map((item) => (
        <div key={item.id} className='cursor-pointer'>
          <Card
            className={cn(selectedStandouAmenties.includes(item.name) ? "border-brand_black border-[3px] rounded-md bg-[#F7F7F7]" : "",
              "hover:border-brand_black border-[3px] rounded-md transition-all duration-100" 
            )}
            onClick={() => handleStandoutAmenties(item.name)}
          >
            <CardHeader>
              <Image
                src={item.imageUrl}
                alt={item.name}
                height={32}
                width={32}
                className="w-8 md:h-8"
                />
              <h3 className="font-medium">{item.title}</h3>
            </CardHeader>
          </Card>
        </div>
      ))}
    </div>
  )
}

export default StandoutAmenties