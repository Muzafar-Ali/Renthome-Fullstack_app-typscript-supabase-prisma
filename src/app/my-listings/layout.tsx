import type { ReactNode } from 'react';
import NavBar from '@/components/navbar/NavBar';

const MyListingsLayout = ({ children }:{ children: ReactNode }) => {
  return (
    <div>
      <NavBar/>
      { children }
    </div>
  )
};

export default MyListingsLayout;
