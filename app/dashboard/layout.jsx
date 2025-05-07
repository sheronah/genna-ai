import React from 'react'
import Header from './_components/Header'
import SideNav from './_components/SideNav'
function DashboardLayout({children}) {

  return (
    <div>
        <div className='hidden md:block h-screen bg-white fixed mt-[65px]'>
            <SideNav/>
        </div>
        <div className='md:ml-64 p-10'>
            <Header/>
            {children}

        </div>
        
    </div>
  )
}

export default DashboardLayout