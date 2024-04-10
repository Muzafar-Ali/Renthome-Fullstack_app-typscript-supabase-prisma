"use client"
import { useFormStatus } from 'react-dom';
import { Button } from '../ui/button';
import { Heart, HeartIcon, Loader2 } from 'lucide-react';
import SignUpLoginTrigger from '../SignUpLoginTrigger';
import { AlertDialog, AlertDialogTrigger } from '../ui/alert-dialog';
import LoginDialogContent from '../userAuth/LoginDialogContent';
import { useState } from 'react';
import UserSigninModal from '../userAuth/UserSigninModal';


const AddToFavoriteButton  = ({ userId }: { userId: string | undefined}) => {

  const [isOpen, setIsOpen] = useState(false)

  const { pending } = useFormStatus();
  
  return (
    <>
      {pending ? (
        <button disabled >
          <Loader2 className="h-6 w-6 animate-spin text-primary" />
        </button>
      ) : (
         userId ? (
          <button type="submit">
            <HeartIcon className="w-6 h-6 text-white" fill="#787673" />
          </button>

         ):(
          <>
            <UserSigninModal>
              <HeartIcon className="w-6 h-6 text-white" fill="#787673" />
            </UserSigninModal>
          </>
         )
      )}
    </>
  );
}

export default AddToFavoriteButton 