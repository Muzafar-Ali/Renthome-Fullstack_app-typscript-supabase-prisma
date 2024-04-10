import { useCountries } from '@/hooks/getCountriesList';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button';
import { getImageUrl, getListingDetailsData } from '@/utils/helper';
import { createReservation } from '@/app/actions';
import Image from 'next/image';
import Wrapper from '@/components/Wrapper';
import CategoryShowcase from '@/components/listingDetails/CategoryShowcase';
import LongDescription from '@/components/listingDetails/LongDescription';
import ListingMap from '@/components/listingDetails/ListingMap';
import SelectCalendar from '@/components/listingDetails/SelectCalendar';
import ReservationSubmitButton from '@/components/submitButtons/ReservationSubmitButton';
import UserSignUpModal from '@/components/userAuth/UserSignupModal';

const ListingDetails = async({ params }: { params: { id: string } }) => {

  const supabase = createServerComponentClient({cookies})
  const user = await supabase.auth.getUser();
  const listing = await getListingDetailsData(params.id);
  const { getCountryByValue } = useCountries();
  const country = getCountryByValue(listing?.country as string);

  return (
    <Wrapper className=" xl:w-[85%] mt-10 mb-12">
      <h1 className="font-medium text-2xl mb-5">{listing?.title}</h1>
      <div className="relative h-[200px] xl:h-[550px]">
        <Image
          alt="Image of Home"
          src={getImageUrl(listing?.photo ?? "")}
          fill
          className="rounded-lg w-full object-cover "
        />
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-x-24 mt-8">
        <div className="w-full xl:w-2/3">
          <h3 className="text-base md:text-xl font-medium">
            {country?.flag} {country?.label} / {country?.region}
          </h3>
          <div className="flex items-center gap-x-2 text-muted-foreground">
            <p className='text-sm md:text-base'>{listing?.guests} guests</p>
            <div className='text-xs md:text-base'>-</div>
            <p className='text-sm md:text-base'>{listing?.bedrooms} bedrooms</p> 
            <div className='text-xs md:text-base'>-</div>
            <p className='text-sm md:text-base'>{listing?.beds} beds</p> 
            <div className='text-xs md:text-base'>-</div>
            <p className='text-sm md:text-base'>{listing?.bathrooms} bathrooms</p>
            
          </div>

          <div className="flex items-center mt-6">
            <img
              src={
                listing?.User?.profileImage ??
                "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"
              }
              alt="User Profile"
              className="w-8 md:w-11 h-8 md:h-11 rounded-full"
            />
            <div className="flex flex-col ml-4">
              <h3 className="text-base font-medium">Hosted by {listing?.User?.firstName}</h3>
              <p className="text-sm text-muted-foreground">Host since {listing?.createdAt.getFullYear()}</p>
            </div>
          </div>

          <Separator className="my-7" />
          <CategoryShowcase categoryName={listing?.categoryName as string} />
          <Separator className="my-7" />
          <div className="text-muted-foreground">
            <p className='line-clamp-4'>{listing?.description}</p>
            <LongDescription description={listing?.description?? undefined}/>
          </div>
          <Separator className="my-7" />
          <ListingMap locationValue={country?.value as string} />
        </div>

        <form action={createReservation}>
          <input type="hidden" name="homeId" value={params.id} />
          <input type="hidden" name="userId" value={user?.data.user?.id} />            
          <SelectCalendar reservation={listing?.Reservation} />
          { user?.data.user?.id ? ( <ReservationSubmitButton /> ) : (
              <UserSignUpModal>
                <Button type='button' className="w-full"> Make a Reservation</Button>
              </UserSignUpModal>
            )
          }
        </form>
      </div>
    </Wrapper>
  );
}

export default ListingDetails