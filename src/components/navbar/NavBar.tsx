import React from 'react'
import Wrapper from '../Wrapper'
import Link from 'next/link'
import UserNav from './UserNav'
import NavSearch from './NavSearch'
import Logo from './Logo'
import MobileNavbar from './MobileNavbar'
import UserSigninModal from '../userAuth/UserSigninModal'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

const NavBar = async () => {
 
  const supabase = createServerComponentClient({ cookies });
  const user = await supabase.auth.getUser();

  return (
    <Wrapper className="w-full md:border-b">
      <nav className="flex items-center justify-between py-4">
        <div className="hidden md:block">
          <Logo/>
        </div>
        <div className='hidden md:block'>
          <NavSearch/>
        </div>
        <div className="hidden md:flex justify-center items-center space-x-4">
          
          <div className="text-sm font-semibold hover:bg-[#F7F7F7] py-4 px-4 rounded-full transition-all duration-300">
            { user.data.user && (
              <Link href="/overview">
                <h2>Rent your Home</h2>
              </Link>
            )}
            {!user.data.user && (
              <h2 className='text-brand_black'>
                <UserSigninModal>
                  Add your home
                </UserSigninModal>
              </h2>
            )}
          </div>
          <UserNav/>
        </div>
      </nav>
      <MobileNavbar/>
    </Wrapper>
  )
}

export default NavBar