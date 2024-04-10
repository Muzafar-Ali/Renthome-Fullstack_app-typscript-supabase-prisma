import React from 'react'
import Wrapper from '../Wrapper'
import { Button } from '../ui/button'
import Image from 'next/image'
// import blackSmallLogo from '@/utils/SVG_Amenities/black-sm-logo.svg'
import iconBlack from '../../../public/logo-sm-black.png'
import Link from 'next/link'

const NavbarCreatePage = () => {
  return (
    <Wrapper className='w-full px-5 md:px-10 xl:px-20 mt-8'>
      <div className='flex items-center justify-between'>
        {/* logo */}
        <Link href='/' className='max-md:hidden'>
          <Image
            src={iconBlack}
            alt={'logo'}
            width={42}
            height={42}
            className=''
          />
        </Link>
          
        <Button variant={'outline'} className='rounded-full hover:border-black hover:bg-white font-bold'>
          <Link href='/'> save & exit </Link>
        </Button>       
      </div>
    </Wrapper>
  )
}

export default NavbarCreatePage