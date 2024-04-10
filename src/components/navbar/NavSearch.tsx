import { Search, SearchIcon } from 'lucide-react'
import React from 'react'
import { Separator } from '../ui/separator'

const NavSearch = () => {
  return (
    <div className='flex items-center gap-2 border shadow-md hover:shadow-lg rounded-2xl py-2 px-4 transition-all duration-300'>

      <div className='flex items-center gap-x-2'>
        <h2 className='text-brand_black font-semibold'>Anywhere</h2>
        <Separator
          orientation='vertical'
          className='bg-black/30 h-4'    
        />
      </div>

      <div className='flex items-center gap-x-2'>
        <h2 className='text-brand_black font-semibold'>Any week</h2>
        <Separator
          orientation='vertical'
          className='bg-black/30 h-4'    
        />
      </div>

      <div className='text-brand_gray'>Add guests</div>
      {/* search icon */}
      <div className='bg-brand rounded-xl p-2'>
        <Search size={15}  className='text-white'/>
      </div>

    </div>
  )
}

export default NavSearch