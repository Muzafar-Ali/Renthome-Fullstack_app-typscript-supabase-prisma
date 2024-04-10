import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import NextSubmitButton from '../submitButtons/NextSubmitButton';

const CancelAndNextButton = () => {

  return (
    <div className="fixed w-full bottom-0 z-10 bg-white border-t h-24">
      <div className="flex items-center justify-between mx-auto px-5 lg:px-10 h-full">
        <NextSubmitButton/>
      </div>
    </div>
  );
}

export default CancelAndNextButton