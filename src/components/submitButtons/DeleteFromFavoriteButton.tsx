"use client"
import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";
import { Heart, HeartIcon, Loader2 } from "lucide-react";


const DeleteFromFavoriteButton = () => {

  const { pending } = useFormStatus();
    
  return (
    <>
      {pending ? (
        <button disabled>
          <Loader2 className="h-6 w-6 animate-spin text-primary" />
        </button>
      ) : (
        <button type="submit">
          <HeartIcon className="w-6 h-6 text-white" fill="#FF385C" />
        </button>
      )}
    </>
  );
}

  export default DeleteFromFavoriteButton;