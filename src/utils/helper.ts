import prisma from './db';
import { unstable_noStore as noStore } from "next/cache";
import { GetListingDataType } from './types';

export const getListingData = async ({ searchParams, userId } : GetListingDataType) => {
  noStore();
  
  // Construct the where object dynamically
  type WhereObjectType = {
    [key: string]: string | number | Date | boolean | undefined;
  }

  const where: WhereObjectType = {
    published: true,
  };
  
  if (searchParams?.category) where.categoryName = searchParams.category;
  if (searchParams?.country) where.country = searchParams.country;
  if (searchParams?.guest) where.guests = Number(searchParams.guest);
  if (searchParams?.room) where.bedrooms = Number(searchParams.room);
  if (searchParams?.bathroom) where.bathrooms = Number(searchParams.bathroom);

  const data = await prisma.home.findMany({
    where,
    select: {
      photo: true,
      id: true,
      price: true,
      description: true,
      country: true,
      published: true,
      Favorite: {
        where: {
          userId: userId ?? undefined,
        },
      },
    },
  });

  return data;
}


export const getMyListingData = async (userId: string)=> {
  noStore();
    const data = await prisma.home.findMany({
      where: {
        userId: userId,
      },
      select: {
        id: true,
        country: true,
        photo: true,
        description: true,
        price: true,
        Favorite: {
          where: {
            userId: userId,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  
  return data;
}

export const getImageUrl = (image: string): string => {
  return `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/${process.env.NEXT_PUBLIC_S3_BUCKET}/${image}`;
}
  

export const getListingDetailsData = async (homeid: string) => {
  noStore();
  const data = await prisma.home.findUnique({
    where: {
      id: homeid,
    },
    select: {
      photo: true,
      description: true,
      guests: true,
      bedrooms: true,
      beds: true,
      bathrooms: true,
      title: true,
      categoryName: true,
      price: true,
      country: true,
      createdAt: true,
      Reservation: {
        where: {
          homeId: homeid,
        },
      },

      User: {
        select: {
          profileImage: true,
          firstName: true,
        },
      },
    },
  });

  return data;
}

export const getFavoriteData = async (userId: string) => {
  noStore();
  const data = await prisma.favorite.findMany({
    where: {
      userId: userId,
    },
    select: {
      Home: {
        select: {
          photo: true,
          id: true,
          Favorite: true,
          price: true,
          country: true,
          description: true,
        },
      },
    },
  });

  return data;
}

export const getReservationsData = async (userId: string) => {
  noStore();
  const data = await prisma.reservation.findMany({
    where: {
      userId: userId,
    },
    select: {
      Home: {
        select: {
          id: true,
          country: true,
          photo: true,
          description: true,
          price: true,
          Favorite: {
            where: {
              userId: userId,
            },
          },
        },
      },
    },
  });

  return data;
}