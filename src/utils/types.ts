export type UserDataType = {
  id: string | undefined,
  firstName: string,
  lastName: string,
  email: string,
}

export type CategoryType = {
  id: number,
  name: string,
  description: string,
  title: string,
  imageUrl: string,
}

export type OverViewType = Omit<CategoryType, "name">;

export type AmenitiesType = Omit<CategoryType, "description">;

export type ItemsNotFoundType = {
title: string;
description: string;
}
  
export type GetListingDataType ={
  userId: string | undefined
  searchParams?: {
    category?: string;
    country?: string;
    guest?: string;
    room?: string;
    bathroom?: string;
  }
}

export type ListingDataType1 = {
  id: string;
  description: string | null;
  country: string | null;
  photo: string | null;
  price: number | null; 
}

export type ListingDataType = {
  id: string;
  title: string;
  description: string;
  guests: number;
  bedrooms: number;
  beds: number;
  bathrooms: number;
  country: string;
  photo: string;
  price: number;
  categoryName: string;
  placeType: string;
  amenities: string[];
  standoutAmenties: string[];
  safetyItems: string[];
  createdAt: Date;
  userId: string;
}

export type FavoriteDataType = {
  Home: {
    id: string;
    description: string | null;
    country: string | null;
    photo: string | null;
    price: number | null;
    Favorite: {
      id: string;
      userId: string | null;
      homeId: string;
      createAt: Date;
    }[];
  } | null;
}

