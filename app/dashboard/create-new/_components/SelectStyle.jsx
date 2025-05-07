import React, { useState } from 'react'
import Image from 'next/image'

function SelectStyle({ onUserSelect }) {
    const styleOptions = [
        {
            name: 'Realistic',
            image: '/styles/realistic.jpg' // Added placeholder image path
        },
        {
            name: 'Cartoon',
            image: '/styles/cartoon.jpg' // Added placeholder image path
        },
        {
            name: 'Comic',
            image: '/styles/comic.jpg' // Added placeholder image path
        },
        {
            name: 'WaterColor',
            image: '/styles/watercolor.jpg' // Added placeholder image path
        },
        {
            name: 'GTA',
            image: '/styles/gta.jpg' // Added placeholder image path
        },
    ]
    const [selectedStyle, setSelectedStyle] = useState('');

    return (
        <div className='mt-7'>
            <h2 className='font-bold text-2xl'>Style</h2>{/*primarycolor needed*/}
            <p className='text-gray-500'>Select your video style</p>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5 mt-3'>
                {styleOptions.map((item, index) => (
                    <div 
                        key={index}
                        className={`relative hover:scale-105 transition-all cursor-pointer
                            rounded-xl
                            ${selectedStyle === item.name ? 'border-4 border-purple-500' : ''} 
                        `}
                        onClick={() => {
                            setSelectedStyle(item.name);
                            onUserSelect('imageStyle', item.name);
                        }}
                    >
                        <Image 
                            src={item.image || '/placeholder.jpg'} 
                            width={100} 
                            height={100} 
                            alt={item.name}
                            className='h-48 object-cover rounded-lg w-full'
                        /> 
                        <h2 className='absolute p-1 bg-black bottom-0 w-full text-white text-center rounded-b-lg'>
                            {item.name}
                        </h2>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SelectStyle