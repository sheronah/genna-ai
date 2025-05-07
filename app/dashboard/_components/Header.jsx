import React from 'react'
import Image from 'next/image'
import { UserButton } from '@clerk/nextjs'
import { Button } from '../../../components/ui/button'

function Header() {
  return (
    <div className="p-3 px-5 flex items-center justify-between shadow-md">
      <div className="flex items-center gap-3">
      <Image src="/logo.jpg" alt="logo" width={70} height={70} />

        <h2 className="font-bold text-xl">AI Short Vid</h2>
      </div>
      <div className="flex items-center gap-3">
        <Button>Dashboard</Button>
        <UserButton />
      </div>
    </div>
  )
}

export default Header