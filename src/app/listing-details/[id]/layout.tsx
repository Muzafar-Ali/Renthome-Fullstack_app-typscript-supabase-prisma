import NavBar from '@/components/navbar/NavBar'
import { ReactNode } from 'react'

const ListingDetailslayout = ({ children }: { children: ReactNode}) => {
  return (
    <div>
      <NavBar/>
      { children }
    </div>
  )
}

export default ListingDetailslayout