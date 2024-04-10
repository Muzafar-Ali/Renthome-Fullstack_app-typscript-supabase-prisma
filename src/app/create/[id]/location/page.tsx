"use client"
import { createLocation } from '@/app/actions';
import NextSubmitButton from '@/components/submitButtons/NextSubmitButton';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from '@/components/ui/skeleton';
import { useCountries } from '@/hooks/getCountriesList';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useState } from 'react';

const AddressPage = ({ params }: { params: { id: string } }) => {

  const { getAllCountries } = useCountries();
  const [locationValue, setLocationValue] = useState("");

  // Lazy loading implementation for the Map component
  const LazyMap = dynamic(() => import("@/components/createHome/Map"), {
    ssr: false,
    loading: () => <Skeleton className="h-[50vh] w-full"/>,
  });

  return (
    <>
      <div className="px-5 md:w-3/4 xl:w-3/5 mx-auto mt-10">
        <h2 className="text-xl md:text-3xl font-semibold tracking-tight transition-colors">
          Where is your Home located?
        </h2>
      </div>

      <form action={createLocation}>
        <input type="hidden" name="homeId" value={params.id} />
        <input type="hidden" name="countryValue" value={locationValue} />
        <div className="px-5 md:w-3/4 xl:w-3/5 mx-auto mt-10 mb-36">
          <div className="mb-5">
            <Select required onValueChange={(value) => setLocationValue(value)}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a Country" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Countries</SelectLabel>
                  {getAllCountries().map((item) => (
                    <SelectItem key={item.value} value={item.value}>
                      {item.flag} {item.label} / {item.region}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <LazyMap locationValue={locationValue} />
        </div>
        {/* button section, back and next */}
        <div className="fixed w-full bottom-0 z-10 bg-white border-t h-16 md:h-24">
          <div className="flex items-center justify-between mx-auto px-5 lg:px-10 h-full">
            <Link href={`/create/${params.id}/description`}>
              <Button variant="secondary" size="lg" className="max-md:h-9 max-md:rounded-md max-md:px-3"> Back </Button>
            </Link>
            <NextSubmitButton/>
          </div>
        </div>
      </form>
    </>
  );
}

export default AddressPage