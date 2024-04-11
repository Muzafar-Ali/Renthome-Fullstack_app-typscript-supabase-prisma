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
import { Loader2, X } from 'lucide-react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { UserRegisterationType, userRegisterationSchema } from '@/validations/UserAuthSchema'
import { Button } from '../ui/button'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'
import bcrypt from 'bcryptjs-react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createUser } from '@/app/actions'
import UserSocialSigninModal from './UserSocialSigninModal'

const UserSignUpModal = ({ children }: { children: ReactNode}) => {

  const [isOpen, setIsOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const supabase = createClientComponentClient();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserRegisterationType>({
    resolver: zodResolver(userRegisterationSchema),
  })

  const onSubmitHandle = async( payload: UserRegisterationType ) => {

    setLoading(true)
    const hashPassword = bcrypt.hashSync(payload.password);
    
    const {data , error} = await supabase.auth.signUp({
      email: payload.email,
      password: payload.password,
      options: {
        data: {
          firstName: payload.firstName,
          lastName: payload.lastName,
          email: payload.email,
          password: hashPassword,
          picture: payload.profileImage ?? `https://avatar.vercel.sh/${payload.firstName}`,
        }
      }
    })

    if(error){
      toast.error(error.message);
    }

    // inserting user data in user model
    if(data.user){

      const userData = {
        id: data.user.id,
        firstName: data.user?.user_metadata?.firstName,
        lastName: data.user?.user_metadata?.lastName,
        email: data.user.email,
        // password: hashPassword,
      }
      
      createUser(userData, data.user.id)   

      await supabase.auth.signInWithPassword({
        email: payload.email,
        password: payload.password,
      });

      setLoading(false)
      router.refresh();
      setIsOpen(false);
      toast.success("signed up & signed in  Successfully");
    }
  } 
  
  return (
    <AlertDialog open={isOpen}>
      <AlertDialogTrigger asChild>
        <div  onClick={() => setIsOpen(true)} className='cursor-pointer'>
          { children }
        </div>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle asChild>
            <div className="flex justify-between items-center">
              <span>Sign up</span>
              <X onClick={() => setIsOpen(false)} className="cursor-pointer"/>
            </div>
          </AlertDialogTitle>
            <ToastContainer/>
          <AlertDialogDescription asChild>
            <form onSubmit={handleSubmit(onSubmitHandle)}>
              <h1 className="text-lg font-bold">Welcome to Airbnb</h1>
              <div className="mt-3">
                <Label htmlFor="firstName">First Name</Label>
                <Input placeholder="Enter your First Name" id="firstName" {...register("firstName")}/>
                <span className="text-red-400">{errors.firstName?.message}</span>
              </div>
              <div className="mt-3">
                <Label htmlFor="lastName">Last Name</Label>
                <Input placeholder="Enter your last Name" id="lastName" {...register("lastName")}/>
                <span className="text-red-400">{errors.lastName?.message}</span>
              </div>
              <div className="mt-3">
                <Label htmlFor="email">Email</Label>
                <Input placeholder="Enter your Email" id="email" {...register("email")}/>
                <span className="text-red-400">{errors.email?.message}</span>
              </div>
              <div className="mt-3">
                <Label htmlFor="password">Password</Label>
                <Input placeholder="Enter your Password" id="password" type="password" {...register("password")}/>
                <span className="text-red-400">{errors.password?.message}</span>
              </div>
              <div className="mt-3">
                <Label htmlFor="cpassword">Confirm Password</Label>
                <Input placeholder="Confirm your Password" id="cpassword" type="password" {...register("confirmPassword")}/>
                <span className="text-red-400">{errors.confirmPassword?.message}</span>
              </div>
              <div className="mt-5">
                <Button disabled={loading} className="bg-brand w-full">
                  { loading ? (
                    <span className='flex'>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Please Wait
                    </span>
                    ): <h2 className='font-semibold'>Continue</h2> 
                  }
                </Button>
              </div>
            </form>
          </AlertDialogDescription>
          <h1 className="text-center my-2 text-xl font-bold text-brand_gray">--OR--</h1>
          <UserSocialSigninModal/>
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default UserSignUpModal