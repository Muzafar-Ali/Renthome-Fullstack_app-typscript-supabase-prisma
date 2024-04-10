'use client'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

const UserSignoutModal = () => {
  const supabase = createClientComponentClient()
  
  const handleSignout = async () => {
    await supabase.auth.signOut()
    window.location.href = '/'
  }
  return (
    <button onClick={handleSignout}>Logout</button>
  )
}

export default UserSignoutModal