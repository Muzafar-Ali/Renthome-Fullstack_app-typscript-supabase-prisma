import type { ReactNode } from 'react';
import NavBar from '@/components/navbar/NavBar';

const FavoriteLayout = ({ children }:{ children: ReactNode }) => {
  return (
    <div>
      <NavBar/>
      { children }
    </div>
  )
};

export default FavoriteLayout;
