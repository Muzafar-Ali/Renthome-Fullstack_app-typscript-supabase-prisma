import Image from 'next/image';
import Link from 'next/link';
import DeleteFromFavoriteButton from '../submitButtons/DeleteFromFavoriteButton';
import AddToFavoriteButton from '../submitButtons/AddToFavoriteButton';
import { useCountries } from '@/hooks/getCountriesList';
import { addToFavorite, removeFromFavorite } from '@/app/actions';
import { getImageUrl } from '@/utils/helper';

type ListingCardProps = {
  imagePath: string;
  description: string;
  location: string;
  price: number;
  userId: string | undefined;
  isInFavoriteList: boolean;
  favoriteId: string;
  homeId: string;
  pathName: string;
}

const ListingCard = ({
  description,
  imagePath,
  location,
  price,
  userId,
  favoriteId,
  isInFavoriteList,
  homeId,
  pathName,
}: ListingCardProps) => {

  const { getCountryByValue } = useCountries();
  const country = getCountryByValue(location);
  const amountFormatter = new Intl.NumberFormat('en-US');

  return (
    <div className="flex flex-col mt-5 relative">
      { (<div className="z-10 absolute top-7 right-5">
          { userId && isInFavoriteList ? (
              <form action={removeFromFavorite}>
                <input type="hidden" name="favoriteId" value={favoriteId} />
                <input type="hidden" name="userId" value={userId} />
                <input type="hidden" name="pathName" value={pathName} />
                <DeleteFromFavoriteButton />
              </form>
            ) : (
              <form action={addToFavorite}>
                <input type="hidden" name="homeId" value={homeId} />
                <input type="hidden" name="userId" value={userId} />
                <input type="hidden" name="pathName" value={pathName} />
                <AddToFavoriteButton userId={userId}/>
              </form>
            )} 
          </div>
        )
      }
        
      <Link 
        href={`/listing-details/${homeId}`} 
        className="mt-2"
      >
        <Image
          src={getImageUrl(imagePath)}
          alt="Image of House"
          width={256}
          height={256}
          className="w-full h-[300px] md:h-72 rounded-xl object-cover"
        />

        <h3 className="text-sm md:text-base font-semibold mt-2">
          {country?.label} / {country?.region}
        </h3>
        <p className="text-muted-foreground text-sm line-clamp-2"> {description} </p>
        <p className="pt-2 text-muted-foreground">
          <span className=" font-semibold text-black text-sm md:text-base ">${(amountFormatter.format(price))}</span> night
        </p>
      </Link>
    </div>
  );
}

export default ListingCard