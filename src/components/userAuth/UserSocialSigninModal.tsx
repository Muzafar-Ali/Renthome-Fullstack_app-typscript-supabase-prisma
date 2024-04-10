import Image from 'next/image' 
import { Button } from '../ui/button'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { toast } from 'react-toastify'

const UserSocialSigninModal = () => {

  const supabase = createClientComponentClient();

  const signInWithGithub = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: `${location.origin}/auth/callback`
      }
    })
    if (error) {
      toast.error(error.message, {theme: "colored"});
    }
  }

  const signInWithGoogle = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${location.origin}/auth/callback`
      }
    })
    if (error) {
      toast.error(error.message, {theme: "colored"});
    }
  }
  
  return (
    <div>
      <Button variant={"outline"} className="w-full" onClick={signInWithGoogle}> 
        <Image
          src={'/google.png'}
          alt="google"
          width={25}
          height={25}
          className="mr-5"
          />
        Continue With Google
      </Button>
      <Button variant={"outline"} className="w-full" onClick={signInWithGithub}>
        <Image
          src={'/github.png'}
          alt="github"
          width={25}
          height={25}
          className="mr-5"
        />
        Continue With Github
      </Button>
    </div>
  )
}

export default UserSocialSigninModal