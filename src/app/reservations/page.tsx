import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import ItemsNotFound from "@/components/listings/ItemsNotFound";
import ListingCard from "@/components/listings/ListingCards";
import { getReservationsData } from "@/utils/helper";
import Wrapper from "@/components/Wrapper";


const Reservations = async () => {

  const supabase = createServerComponentClient({cookies})
  const user = await supabase.auth.getUser();

  if (!user?.data.user?.id) return redirect("/");
  
  const reservations = await getReservationsData(user.data.user.id);
  
  return (
    <Wrapper className="mt-10">
      <h2 className="text-3xl font-semibold tracking-tight">Your Reservations</h2>

      {reservations.length === 0 ? (
        <ItemsNotFound
          description="Please list a home on airbnb so that you can see it right here"
          title="You don't have any Homes listed"
        />
      ) : (
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-8 mt-8">
        {reservations.map((item) => (
          <ListingCard
            key={item.Home?.id}
            description={item.Home?.description as string}
            location={item.Home?.country as string}
            pathName="/favorites"
            homeId={item.Home?.id as string}
            imagePath={item.Home?.photo as string}
            price={item.Home?.price as number}
            userId={user.id}
            favoriteId={item.Home?.Favorite[0]?.id as string}
            isInFavoriteList={ (item.Home?.Favorite.length as number) > 0 ? true : false }
          />
        ))}
      </div>
      )}
    </Wrapper>
  );
}

export default Reservations

