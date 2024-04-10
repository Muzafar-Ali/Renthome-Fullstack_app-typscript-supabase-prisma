"use server"
import prisma from "@/utils/db";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

export const createUser = async (userData: any, userId: any ) => {
let userExist = await prisma.user.findUnique({
  where: {
    id: userId,
  },
});

  if (!userExist) {
    await prisma.user.create({
      data: {
      id: userId,
      firstName: userData.firstName ?? "",
      lastName: userData.lastName ?? "",
      email: userData.email ?? "",
      profileImage: userData.picture ?? `https://avatar.vercel.sh/${userData.firstName}`,
      },
    });
  }
}


export const createHome = async ({ userId }: { userId: string }) => {
  const data = await prisma.home.findFirst({
    where: {
      userId: userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  
  if (data === null) {
    const data = await prisma.home.create({
      data: {
        userId: userId,
      },
    });

    return redirect(`/create/${data.id}/about-place`);
  }
  
  if (!data.categoryName && !data.description && !data.country && !data.placeType) {
    return redirect(`/create/${data.id}/about-place`);
  }
  
  if (!data.categoryName) {
    return redirect(`/create/${data.id}/category`);
  } 
  
  if (data.categoryName && !data.placeType) {
    return redirect(`/create/${data.id}/place-type`);
  } 
  
  if (data.placeType && !data.description) {
    return redirect(`/create/${data.id}/description`);
  } 
  
  if (data.categoryName && data.description && data.placeType && !data.country) {
    return redirect(`/create/${data.id}/location`);
  } 
  
  if (data.categoryName && data.description && data.country && data.placeType) {
    const data = await prisma.home.create({
      data: {
        userId: userId,
      },
    });

    return redirect(`/create/${data.id}/about-place`);
  }
}
  
export const createCategoryForHome = async ( formData: FormData) => {
  const categoryName = formData.get("category") as string;
  const homeId = formData.get("homeId") as string;

  try {
    const data = await prisma.home.update({
      where: {
        id: homeId,
      },
      data: {
        categoryName: categoryName,
      },
    });
    
  } catch (error) {
    console.log('prisma update error :', error)
  }

  return redirect(`/create/${homeId}/place-type`);
}

export const createPlaceType = async (formData: FormData) => {
  const placeType = formData.get("placeType") as string;
  const homeId = formData.get("homeId") as string;
  
  await prisma.home.update({
    where: {
      id: homeId,
    },
    data: {
      placeType: placeType,
    },
  });

  return redirect(`/create/${homeId}/standout`); 
}

export const createAmenities = async (formData: FormData) => {
  const amenities = formData.get("amenities") as string;
  const amenitiesArray = amenities.split(',')

  const standoutAmenties = formData.get("standoutAmenties") as string;
  const standoutAmentiesArray = standoutAmenties.split(',')

  const safetyItems = formData.get("safetyItems") as string;
  const safetyItemsArray = safetyItems.split(',')

  const homeId = formData.get("homeId") as string;

  await prisma.home.update({
    where: {
      id: homeId,
    },

    data: {
      amenities: amenitiesArray,
      standoutAmenties: standoutAmentiesArray,
      safetyItems: safetyItemsArray
    },
  });

  return redirect(`/create/${homeId}/finish-setup`); 
}

export const createHomeDescription = async(formData: FormData) =>{
  const supabase = createServerComponentClient({cookies});
  
  const homeId = formData.get("homeId") as string;
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const price = formData.get("price");
  const imageFile = formData.get("image") as File;
  const guestNumber = formData.get("guest");
  const roomNumber = formData.get("room");
  const bedNumber = formData.get("bed");
  const bathroomsNumber = formData.get("bathroom") as string;

  const { data: imageData } = await supabase.storage
    .from(process.env.NEXT_PUBLIC_S3_BUCKET!)
    .upload(`${imageFile.name}-${new Date()}`, imageFile);

  await prisma.home.update({
    where: {
      id: homeId,
    },    
    data: {
      title: title,
      description: description,
      price: Number(price),
      bedrooms: Number(roomNumber),
      bathrooms: Number(bathroomsNumber),
      beds: Number(bedNumber),
      guests: Number(guestNumber),
      photo: imageData?.path,
    },
  });

  return redirect(`/create/${homeId}/location`);
}

export const createLocation = async(formData: FormData) => {
  const homeId = formData.get("homeId") as string;
  const countryValue = formData.get("countryValue") as string;
  
  const data = await prisma.home.update({
    where: {
      id: homeId,
    },
    data: {
      country: countryValue,
      published: true,
    },
  });

  return redirect("/");
}

export const addToFavorite = async(formData: FormData) => {
  const homeId = formData.get("homeId") as string;
  const userId = formData.get("userId") as string;
  const pathName = formData.get("pathName") as string;

  if (!userId) {
    return redirect("/");
  }

  await prisma.favorite.create({
    data: {
      homeId: homeId,
      userId: userId,
    },
  });

  revalidatePath(pathName); // refreshes page(homepage "/") and memory 
}


export const removeFromFavorite = async (formData: FormData) => {
  const favoriteId = formData.get("favoriteId") as string;
  const pathName = formData.get("pathName") as string;
  const userId = formData.get("userId") as string;

  await prisma.favorite.delete({
    where: {
      id: favoriteId,
      userId: userId,
    },
  });

  revalidatePath(pathName); // refreshes page(homepage "/") and memory 
}

export const createReservation = async(formData: FormData) =>{
  const userId = formData.get("userId") as string;
  const homeId = formData.get("homeId") as string;
  const startDate = formData.get("startDate") as string;
  const endDate = formData.get("endDate") as string;

  await prisma.reservation.create({
    data: {
      userId: userId,
      endDate: endDate,
      startDate: startDate,
      homeId: homeId,
    },
  });

  return redirect("/");
}
