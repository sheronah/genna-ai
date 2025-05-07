"use client"
import React, { useState } from 'react'
import { Button } from './../../components/ui/button';

import EmptyState from './_components/EmptyState'
import Link from 'next/link'

function Dashboard() {
  const [videoList, setVideoList] = useState([]);
  
  return (
    <div className="p-5">
      <div className='flex justify-between items-center mb-10'>
        <h2 className='font-bold text-2xl'>Dashboard</h2>
        <Link href="/dashboard/create-new">
          <Button>Create New Video</Button>
        </Link>
      </div>
      
      {/* Empty state */}
      {videoList.length === 0 && (
        <EmptyState />
      )}
    </div>
  )
}

export default Dashboard