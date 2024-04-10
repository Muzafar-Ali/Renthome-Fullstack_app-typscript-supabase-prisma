import { redirect } from "next/navigation";
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { FavoriteDataType } from "@/utils/types";
import { getFavoriteData } from "@/utils/helper";
import ItemsNotFound from '@/components/listings/ItemsNotFound';
import ListingCard from "@/components/listings/ListingCards";
import Wrapper from "@/components/Wrapper";

const Favorites = async () => {

  const supabase = createServerComponentClient({cookies});
  const user = await supabase.auth.getUser();

  if (!user.data.user) return redirect("/");
  
  const favorites: FavoriteDataType[] = await getFavoriteData(user.data.user?.id!);

  return (
    <Wrapper className="mt-10">
      <h2 className="text-3xl font-semibold tracking-tight">Your Favorites</h2>

      {favorites.length === 0 ? (
        <ItemsNotFound
          title="You dont have any favorites"
          description="Please add favorites to see them right here..."
        />
      ) : (
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-8 mt-8">
          {favorites.map((item) => (
            <ListingCard
              key={item.Home?.id}
              description={item.Home?.description as string}
              location={item.Home?.country as string}
              pathName="/favorites"
              homeId={item.Home?.id as string}
              imagePath={item.Home?.photo as string}
              price={item.Home?.price as number}
              userId={user.data.user?.id}
              favoriteId={item.Home?.Favorite[0].id as string}
              isInFavoriteList={
                (item.Home?.Favorite.length as number) > 0 ? true : false
              }
            />
          ))}
        </div>
      )}
    </Wrapper>
  );
}

export default Favorites