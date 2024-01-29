"use client"
import React from 'react'
import { UserButton } from '@clerk/nextjs'
import { motion } from 'framer-motion'
import {   slideInFromLeft, slideInFromRight, slideInFromTop } from '../utils/motion'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { FaInstagram,FaXTwitter,FaFacebook } from 'react-icons/fa'
const Topbar = () => {
  const router=useRouter()
  const path=usePathname()
  
  return (
    <motion.div initial="hidden" animate="visible" className="flex justify-between h-[60px] top-0 fixed w-full  p-2 py-4 bg-opacity-25 rounded-sm bg-[#03001417] shadow-lg shadow-[#2A0E61]/50 backdrop-blur-md  z-[2]">
        <motion.div  variants={slideInFromLeft(0.5)} className='pl-2'><UserButton afterSignOutUrl="/Sign-in" className="w-[30px]"></UserButton>   </motion.div>    
        <motion.div variants={slideInFromTop} className='flex items-center p-2  h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[15px] rounded-full text-gray-200'>
          <Link href="/home" className={path==="/home"?` text-2xl font-extrabold ml-3 mont-max blue-text-gradient`:`mont-max text-2xl font-extrabold ml-3 text-white`}>Home</Link>
          <Link href="/" className={path==="/"?`mont-max text-2xl font-extrabold ml-3 blue-text-gradient`:`mont-max text-2xl font-extrabold ml-3 text-white`}>About</Link>      
        </motion.div>
        <motion.div variants={slideInFromRight(0.5)} className='flex justify-between gap-5'>
        <FaFacebook size={30}></FaFacebook>
        <FaInstagram size={30}></FaInstagram>
        </motion.div>
      </motion.div>
  )
}

export default Topbar