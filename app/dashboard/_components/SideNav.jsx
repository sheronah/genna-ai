"use client"

import { usePathname } from 'next/navigation'
import { CircleUserIcon, FileVideo, PanelsTopLeft, ShieldPlusIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function SideNav() {
    const MenuOption = [
        {
            id: 1,
            name: "Dashboard",
            path: "/dashboard",
            icon: PanelsTopLeft
        },
        {
            id: 2,
            name: "Create New",
            path: "/dashboard/create-new",
            icon: FileVideo
        },
        {
            id: 3,
            name: "Upgrade",
            path: "/upgrade",
            icon: ShieldPlusIcon
        }, 
        {
            id: 4,
            name: "Account",
            path: "/account",
            icon: CircleUserIcon
        }
    ]
    
    const path = usePathname();
    
    return (
        <div className="w-64 h-screen shadow-md">
            <div className='grid gap-3'>
                {MenuOption.map((item) => (
                    <Link href={item.path} key={item.id}>
                        <div className={`flex items-center gap-3 p-3 hover:bg-purple-100 rounded-md cursor-pointer
                            ${path === item.path ? "bg-purple-500 text-white" : "text-gray-700"}`}>
                            <item.icon />
                            <h2 className="text-lg font-medium">{item.name}</h2>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default SideNav