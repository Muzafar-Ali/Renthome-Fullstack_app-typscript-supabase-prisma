import React, { ReactNode } from 'react'

const Wrapper = ({ children, className }:{ children: ReactNode, className?: string }) => {
  return (
    <div className={`max-w-[1900px] mx-auto px-5 md:px-10 xl:px-20 relative ${className}`}>
      {children}
    </div>
  )
}

export default Wrapper