import { getListingData, getListings } from "@/lib/helper"
import { GetListingDataType } from "@/lib/types";

export const useLisitngs = () => {

    
    const listingWithParams = () => getListingData(params);

    const allListings = () => getListings();

    return {
        listingWithParams,
        allListings
    }
}


