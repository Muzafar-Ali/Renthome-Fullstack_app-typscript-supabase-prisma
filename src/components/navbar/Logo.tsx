import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <div>
      <Link href={"/"}>
        <Image
          src={"/logo1.1.png"}
          alt="logo"
          width={150}
          height={150}
          priority={true}
        />
      </Link>
    </div>
  )
}

export default Logo