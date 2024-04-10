"use client"
import React, { ReactNode, useState } from 'react'
import { 
  AlertDialog, 
  AlertDialogContent, 
  AlertDialogDescription, 
  AlertDialogHeader, 
  AlertDialogTitle, 
  AlertDialogTrigger 
} from '../ui/alert-dialog'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Loader2, X } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { UserLoginType, userLoginSchema } from '@/validations/UserAuthSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserSocialSigninModal from './UserSocialSigninModal'
// import UserSocialModal from './UserSocialModal'


const UserSigninModal = ({ children }: { children: ReactNode }) => {

  const [isOpen, setIsOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const supabase = createClientComponentClient();
  const router = useRouter();

  const { 
    register, 
    handleSubmit, 
    formState: { errors } 
  } = useForm<UserLoginType>({
    resolver: zodResolver(userLoginSchema),
  });

  const onSubmitHandle = async (payload: UserLoginType) => {
    setLoading(true)

    const {data , error} = await supabase.auth.signInWithPassword({
      email: payload.email,
      password: payload.password,
    })

    if(error){
      console.log('login err', error)
      toast.error(error.message);
    }
    if(data.user){
      setIsOpen(false)
      router.refresh()
    }

    setLoading(false)
  }

  return (
    <AlertDialog open={isOpen}>
      <AlertDialogTrigger asChild>
        <div onClick={() => setIsOpen(true)} className='cursor-pointer'>
          { children }
        </div>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle asChild >
            <div className="flex justify-between items-center">
              <span>Login</span>
              <X onClick={() => setIsOpen(false)} className="cursor-pointer"/>
            </div>

          </AlertDialogTitle>
          <AlertDialogDescription>
            <div>
              <ToastContainer/>
              <form onSubmit={handleSubmit(onSubmitHandle)}>
                <h1 className="text-lg font-bold">Welcome to Airbnb</h1>
                <div className="mt-5">
                  <Label htmlFor="email">Email</Label>
                  <Input placeholder="Enter your Email" id="email" type="email" {...register("email")}/>
                  <span className="text-red-400">{errors.email?.message}</span>
                </div>
                <div className="mt-5">
                  <Label htmlFor="password">Password</Label>
                  <Input placeholder="Enter your Password" id="password" type="password" {...register("password")}/>
                  <span className="text-red-400">{errors.password?.message}</span>
                </div>
                <div className="mt-5">
                  <Button disabled={loading} className="bg-brand w-full">
                  { loading ? (
                    <span className='flex'>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Please Wait
                    </span>
                    ) : <h2 className='font-semibold'>Sign in</h2>
                  }
                  </Button>
                </div>
              </form>
              <h1 className="text-center my-2 text-xl font-bold text-brand_gray">--OR--</h1>
              <UserSocialSigninModal/>
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>

      </AlertDialogContent>
    </AlertDialog>
  )
}

export default UserSigninModal