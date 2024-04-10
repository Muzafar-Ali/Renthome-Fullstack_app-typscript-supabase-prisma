import Wrapper from '@/components/Wrapper';
import ItemsNotFound from '@/components/listings/ItemsNotFound';
import ListingCard from '@/components/listings/ListingCards';
import { getMyListingData } from '@/utils/helper';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const MyListings = async() => {

  const supabase = createServerComponentClient({cookies})
  const user = await supabase.auth.getUser()

  if (!user) {
    return redirect("/");
  }
  const myListings = await getMyListingData(user.data.user?.id!);
  
  return (
    <Wrapper className="mt-10">
      <h2 className="text-3xl font-semibold tracking-tight">Your listings</h2>

      {myListings.length === 0 ? (
        <ItemsNotFound
          description="Please list a home on airbnb so that you can see it right here"
          title="You don't have any Homes listed"
        />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {myListings.map((item) => (
            <ListingCard
              key={item.id}
              imagePath={item.photo as string}
              homeId={item.id}
              price={item.price as number}
              description={item.description as string}
              location={item.country as string}
              userId={user.data.user?.id}
              pathName="/my-listings"
              favoriteId={item.Favorite[0]?.id}
              isInFavoriteList={item.Favorite.length > 0 ? true : false}
            />
          ))}
        </div>
      )}
    </Wrapper>
  );
}

export default MyListings