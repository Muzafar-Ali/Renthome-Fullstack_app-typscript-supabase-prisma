"use client"
import React, { useState } from 'react'
import { Card, CardHeader } from '../ui/card'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { categoryItems } from '@/utils/data'
import Wrapper from '../Wrapper'

const SelectCategory = () => {
  
  const [selectedCategory, setSelectedCategory] = useState<string>('')
  
  return (
    <Wrapper >
      <input 
        type="hidden" 
        name='category'
        value={selectedCategory}
      />
      <div className="grid gird grid-cols-2 md-s:grid-cols-3 xl:grid-cols-4 gap-8 mt-10 px-5 md:w-3/5 mx-auto mb-36 ">
        { categoryItems.map((item) => (
          <div key={item.id} className='cursor-pointer'>
            <Card
              onClick={() => setSelectedCategory(item.name)}
              className={cn(selectedCategory === item.name ? "border-brand_black border-[3px] rounded-md bg-[#F7F7F7]" : "",
                "hover:border-brand_black border-[3px] rounded-md transition-all duration-100" 
              )}
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
    </Wrapper>
  )
}

export default SelectCategory


