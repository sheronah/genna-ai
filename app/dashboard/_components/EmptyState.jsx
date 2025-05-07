import { Button } from '../../../components/ui/button'
import React from 'react'
import Link from 'next/link'

function EmptyState() {
  return (
    <div className='p-5 py-24 flex items-center flex-col mt-10 border-2 border-dashed'>
        <h2 className="text-lg font-medium mb-4">You don't have any short videos created</h2>
        <Link href="/dashboard/create-new">
            <Button>Create New Short Video</Button>
        </Link>
    </div>
  )
}

export default EmptyState