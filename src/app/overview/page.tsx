import Wrapper from '@/components/Wrapper'
import NavbarCreatePage from '@/components/navbar/NavbarCreatePage'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { overView } from '@/utils/data'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import Image from 'next/image'
import { createHome } from '../actions'


const OverviewPage = async () => {

  const supabase = createServerComponentClient({ cookies });
  const user = await supabase.auth.getUser();

  const createHomeArguments = createHome.bind(null,{
    userId: user?.data.user?.id as string,
  })

  return (
    <>
      <NavbarCreatePage/>
      <Wrapper className='flex flex-col md:flex-row items-center my-4 gap-5 lg:gap-20'>
        <div className='flex-1 h-full w-full'>
          <div>
            <h1 className='text-3xl md:text-5xl leading-9 md:leading-normal text-black font-normal md:font-bold max-w-[550px]'>
              It's easy to get started on RentHome
            </h1>
          </div>
        </div>
        <div className='flex-1 h-full w-full'>
          { overView.map((item) => (
            <div key={item.id} className='flex items-start justify-start  border-b border-brand_gray/20 pb-5 mt-5'>
              <div className='flex gap-3 md-s:gap-16 md:gap-6'>
                <div className='flex'>
                  <h3 className='text-base md:text-2xl text-black align-text-top pr-4'> {item.id} </h3>
                  <div className='flex flex-col'>
                    <h3 className='text-base md:text-2xl text-brand_black_black font-semibold md:font-bold'>{item.title}</h3>
                    <p className='text-brand_gray text-sm md:text-lg max-w-[448px]'>{item.description}</p> 
                  </div>
                </div>
                <div className='relative w-[120px] h-[76px] md:h-32 object-cover'>
                  <Image
                    src={item.imageUrl}
                    alt="image"
                    fill
                    />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Wrapper>
      <div className="fixed w-full bottom-0 z-10 bg-white border-t h-16 md:h-24">
        <Separator className="mx-auto w-full h-1" />
        <div className="flex items-center justify-end mx-auto px-5 lg:px-10 h-full">
        <form action={createHomeArguments}>
            <Button size="lg" type='submit' className="max-md:h-9 max-md:rounded-md max-md:px-3 text-base font-bold"> 
              Get started 
            </Button>
          </form>
        </div>
      </div>
    </>
    
  )
}

export default OverviewPage