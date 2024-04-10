import type { ReactNode } from 'react';
import NavbarCreatePage from '@/components/navbar/NavbarCreatePage';

const CreateLayout = ({ children }:{ children: ReactNode }) => {
 return (
    <div>
      <NavbarCreatePage />
      { children } 
    </div>
 );
};

export default CreateLayout;
