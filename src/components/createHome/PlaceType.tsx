"use client"
import House from "../svg/House"
import Room from "../svg/Room"
import SharedRoom from "../svg/SharedRoom"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { Card, CardHeader } from "../ui/card"

const data = [
  {
    id: 1,
    title: 'An entire place',
    description: 'Guests have whole place to themselves',
    svg: <House/>
  },
  {
    id: 2,
    title: 'A room',
    description: 'Guests have their own room in a home, plus acces to shared spaces.',
    svg: <Room/>
  },
  {
    id: 3,
    title: 'A shared room',
    description: 'Guests sleep in a room or common room area that may be shared with you or others.',
    svg: <SharedRoom/>
  }
]

const PlaceType = () => {

  const [selectedPlaceType, setSelectedPlaceType] = useState("")

  return (
    <div className='flex flex-col items-center gap-10 px-5 md:px-20 mb-20'>  
      <div className='flex flex-col gap-y-5 md:w-[600px]'>
        <h2 className="text-xl md:text-3xl font-semibold tracking-tight transition-colors">
          What type of place will guests have?
        </h2>
        <input type="hidden" name='placeType' value={selectedPlaceType} />
        { data.map((item, index) => (
          <div key={index} className="cursor-pointer">
            <Card 
              className={cn(selectedPlaceType === item.title ? "border-brand_black border-[3px] rounded-xl text-brand_gray bg-[#F7F7F7]" : "",
              "hover:border-brand_black border-[3px] rounded-xl transition-all duration-100"
              )}
              onClick={() => setSelectedPlaceType(item.title)}
            >
              <CardHeader className="flex flex-row justify-between">
                <div className=' flex flex-col items-start w-[90%]'>
                  <h1 className='text-base md:text-lg font-semibold'>{item.title}</h1>
                  <p className='text-sm md:text-base text-brandlight'>{item.description}</p>
                </div>
                {item.svg}
              </CardHeader>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PlaceType