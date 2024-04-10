"use client"
import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";


const NextSubmitButton = () => {

  const { pending } = useFormStatus();
  
  return (
    <>
      {pending ? (
        <Button disabled size="lg" className="max-md:h-9 max-md:rounded-md max-md:px-3 text-base font-bold">
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Wait
        </Button>
      ) : (
        <Button type="submit" size="lg" className="max-md:h-9 max-md:rounded-md max-md:px-3 text-base font-bold">
          Next
        </Button>
      )}
    </>
  );
}

export default NextSubmitButton