import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { getListingData } from '@/utils/helper'
import ItemsNotFound from '@/components/listings/ItemsNotFound'
import Wrapper from '../Wrapper'
import ListingCard from './ListingCards'

export type ListingProps = {
  category?: string;
  country?: string;
  guest?: string;
  room?: string;
  bathroom?: string;
}

const Listings = async ({ searchParams }: { searchParams?: ListingProps}) => {

  const supabase = createServerComponentClient({cookies})
  const userId = (await supabase.auth.getUser()).data.user?.id 
  
  const listing = await getListingData({
    searchParams,
    userId
  })
  
  return (
    <div className=''>
      { listing.length === 0 ? 
      ( <ItemsNotFound
          description="Please check a other category or create your own listing!"
          title="Sorry no listings found for this category..."
        />
      ):
      (
        <Wrapper className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {listing.map((item) => (
            <ListingCard
              key={item.id}
              description={item.description as string}
              imagePath={item.photo as string}
              location={item.country as string}
              price={item.price as number}
              userId={userId}
              favoriteId={item.Favorite[0]?.id}
              isInFavoriteList={item.Favorite.length > 0 ? true : false}
              homeId={item.id}
              pathName="/"
            />
          ))}
        </Wrapper>
      ) 
    }
    </div>
  )
}

export default Listings