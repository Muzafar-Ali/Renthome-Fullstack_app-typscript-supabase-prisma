import Listings, { ListingProps } from "@/components/listings/Listings";
import SkeletonLoading from "@/components/listings/SkeletonLoading";
import Categories from "@/components/navbar/Categories";
import NavBar from "@/components/navbar/NavBar";
import { Suspense } from "react";


export default function Home({searchParams}: {searchParams?: ListingProps}) {
  return (
    <div>
      <NavBar/>
      <Categories/>

      <Suspense key={searchParams?.category} fallback ={<SkeletonLoading/>}>
        <Listings searchParams={searchParams}/>
      </Suspense>
    </div>
  );
}
