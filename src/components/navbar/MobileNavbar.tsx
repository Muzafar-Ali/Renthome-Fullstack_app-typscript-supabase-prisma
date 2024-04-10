import { Search, SlidersHorizontal } from "lucide-react"

const MobileNavbar = () => {
  return (
    <div className='md:hidden flex items-center justify-between gap-x-3'>
      <div className='flex items-center justify-between rounded-full px-4 py-2 shadow-custom w-full'>
        <div className='flex items-center'>
          <Search/>
          <div className='flex flex-col ml-2'>
            <span className='text-brand_black text-sm font-semibold'>Anywhere</span>
            <span className='text-brand_gray text-xs'>Any week . Add guests</span>
          </div>
        </div>
      </div>
      <div className="border border-brand_black/50 rounded-full px-3 py-3 flex items-center justify-center">
        <SlidersHorizontal size={20}/> 
      </div>
    </div>
  )
}

export default MobileNavbar