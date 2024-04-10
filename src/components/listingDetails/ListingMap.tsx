import { Skeleton } from "@/components/ui/skeleton";
import dynamic from "next/dynamic";

const ListingMap = ({ locationValue }: { locationValue: string })  => {

  const LazyMap = dynamic(() => import("@/components/createHome/Map"), {
    ssr: false,
    loading: () => <Skeleton className="h-[50vh] w-full" />,
  });


  return (
    <LazyMap locationValue={locationValue} />
  )
}

export default ListingMap