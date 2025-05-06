import { SignIn } from '@clerk/nextjs'
import Image from 'next/image';
export default function Page() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
    {/* Image Section */}
    <div className="flex items-center justify-center">
      <Image
        src="/Login.jpg"
        alt="Login"
        width={500}
        height={500}
        className="w-full h-auto object-contain"
      />
    </div>
  
    {/* SignIn Section */}
    <div className="flex justify-center items-start mt-20">
      <SignIn />
    </div>
  </div>
  )
}