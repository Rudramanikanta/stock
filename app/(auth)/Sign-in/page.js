import { SignIn } from '@clerk/nextjs'
import React from 'react'

const page = () => {
  return (
    <div className='flex items-center justify-center w-full h-screen p-10 align-middle bg-gray-900'>
    <SignIn className="shadow-xl ring-1 "></SignIn>
    </div>
  )
}

export default page