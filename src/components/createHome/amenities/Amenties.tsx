'use client'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { useState } from 'react'
import { amenities } from '@/utils/data'
import { Card, CardHeader } from '@/components/ui/card'

const Amenties = () => {

  const [selectedAmenties, setSelectedAmenties] = useState<string []>([])

  const handleAmenties = (name: string) => {
    
    if (selectedAmenties.includes(name)) {
      setSelectedAmenties(selectedAmenties.filter((amenity) => amenity !== name))
    }

    if(!selectedAmenties.includes(name)) {
      setSelectedAmenties([name, ...selectedAmenties])
    }
  
  }

  return (
    <div className="grid gird grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 ">
      <input type="hidden" name='amenities' value={selectedAmenties} />
      { amenities.map((item) => (
        <div key={item.id} className='cursor-pointer'>
          <Card
              className={cn(selectedAmenties.includes(item.name) ? "border-brand_black border-[3px] rounded-md bg-[#F7F7F7]" : "",
                "hover:border-brand_black border-[3px] rounded-md transition-all duration-100" 
              )}
              onClick={() => handleAmenties(item.name)}
          >
            <CardHeader>
              <Image
                src={item.imageUrl}
                alt={item.name}
                height={32}
                width={32}
                className="w-8 md:h-8"
              />
              <h3 className="font-semibold">{item.title}</h3>
            </CardHeader>
          </Card>
        </div>
      ))}
    </div>
  )
}

export default Amenties