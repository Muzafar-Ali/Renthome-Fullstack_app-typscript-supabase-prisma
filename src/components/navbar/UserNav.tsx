import React from 'react'
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from '../ui/dropdown-menu'
import Image from 'next/image'
import { MenuIcon } from 'lucide-react'
import Link from 'next/link'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import userImage from '../../../public/user.webp'
import UserSigninModal from '../userAuth/UserSigninModal'
import UserSignUpModal from '../userAuth/UserSignupModal'
import UserSignoutModal from '../userAuth/UserSignoutModal'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers' 


const UserNav = async () => {

  const supabase = createServerComponentClient({ cookies });
  const user = await supabase.auth.getUser();
    
  // const createHomeArguments = createHome.bind(null,{
  //   userId: user?.data.user?.id as string,
  // })

  return (
    <>
      { user.data.user?.id && (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <div className="rounded-2xl border px-2 py-1 lg:px-3 lg:py-[8px] flex items-center gap-x-3 hover:shadow-custom transition-all duration-300">
              <MenuIcon className="w-6 h-6 lg:w-5 lg:h-5 opacity-80" />
              <Image 
                src={user?.data.user?.user_metadata.picture }
                width={32}
                height={32}
                alt="Image of the user"
                className="rounded-full h-8 w-8 hidden md:block"
              />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-[280px] mt-1 border-none shadow-custom rounded-2xl">
            <div className='py-2'>
              <DropdownMenuItem>
                <Link href="/overview" className="w-full p-1">
                  Rent your Home
                </Link>
                  {/* <button type="submit" className="w-full text-start">
                  </button>
                </form> */}
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/dashboard" className="w-full p-1">
                  Dashboard
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/my-listings" className="w-full p-1">
                  My Listings
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/favorites" className="w-full p-1">
                  My Favorites
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/reservations" className="w-full p-1">
                  My Reservations
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                {/* user logout  */}
                <span className='p-1'>
                  <UserSignoutModal/>
                </span>
              </DropdownMenuItem>
            </div>
            </DropdownMenuContent>
        </DropdownMenu>
      )}

      {!user.data.user?.id && (
        <Popover>
          <PopoverTrigger asChild>
            <div className="rounded-full border px-2 py-1 lg:px-3 lg:py-[10px] flex items-center gap-x-3 hover:shadow-custom transition-all duration-300 cursor-pointer">
              <MenuIcon className="w-6 h-6 lg:w-5 lg:h-5 opacity-80" />
              <Image 
                src={userImage}
                width={32}
                height={32}
                alt="Image of the user"
                className="rounded-full h-8 w-8 hidden md:block"
              />
            </div>
          </PopoverTrigger>
          <PopoverContent className="mr-[40px] mt-1 w-[280px] border-none shadow-custom rounded-2xl">
            <ul className=''>
              <> 
                <UserSignUpModal>
                  <li className="hover:bg-gray-100 rounded-md p-2 cursor-pointer font-semibold">Sign up</li>
                </UserSignUpModal>
                
                <UserSigninModal>
                  <li className="hover:bg-gray-100 rounded-md p-2 cursor-pointer">Sign in</li>
                </UserSigninModal>
              </>
            </ul>
          </PopoverContent>
        </Popover>
      )}
    </>
  )
}

export default UserNav