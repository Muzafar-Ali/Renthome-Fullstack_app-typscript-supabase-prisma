"use client"
import Image from 'next/image'
import { useState } from 'react'
import { cn } from '@/lib/utils'
import { safetyItems } from '@/utils/data'
import { Card, CardHeader } from '@/components/ui/card'

const SafetyItems = () => {

  const [selectedSafetyItems, setselectedSafetyItems] = useState<string[]>([])

  const handleSafetyItems = (name: string) => {
    
    if (selectedSafetyItems.includes(name)) {
      setselectedSafetyItems(selectedSafetyItems.filter((amenity) => amenity !== name))
    }

    if(!selectedSafetyItems.includes(name)) {
      setselectedSafetyItems([name, ...selectedSafetyItems])
    }
  
  }
  return (
    <div className="grid gird grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 pb-20 md:pb-[120px] ">
      <input type="hidden" name='safetyItems' value={selectedSafetyItems} />
      { safetyItems.map((item) => (
        <div key={item.id} className='cursor-pointer'>
          <Card
            className={cn(selectedSafetyItems.includes(item.name) ? "border-brand_black border-[3px] rounded-md bg-[#F7F7F7]" : "",
              "hover:border-brand_black hover:border-[3px] rounded-md transition-all duration-100" 
            )}
            onClick={() => handleSafetyItems(item.name)}
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

export default SafetyItems