"use client"
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import { Tilt } from 'react-tilt'
import {  slideInFromLeft, slideInFromRight, slideInFromTop } from '../../utils/motion'
const page = () => {
  return (
    <motion.div initial="hidden" animate="visible" className='relative flex flex-row gap-20 hover:shadow-[#03001417] items-center justify-center align-middle mt-[290px] z-[2]'>
    <Tilt>
    <motion.div variants={slideInFromLeft(0.5)}  className="bg-[#03001417] hover:shadow-lg hover:shadow-[#2A0E61]/50  backdrop-blur-lg content-center rounded-md justify-center p-5 h-[175px] w-fit">
      <div className='h-70'>
        <Image src="/india.jpg" height={150} width={150} className='duration-300 rounded-md animate hover:rounded-none'></Image>
        <h1 className='text-3xl font-extrabold z-[10] text-[25px] leading-5 p-2 text-center mont-max violet-gradient'>India stock</h1>
      </div>
    </motion.div>
    </Tilt>
    <Tilt>
    <motion.div variants={slideInFromRight(0.5)} className="bg-[#03001417] hover:shadow-lg hover:shadow-[#2A0E61]/50 shadow-sm shadow-[#03001417] backdrop-blur-lg content-center rounded-md justify-center py-1 px-3 h-fit w-fit">
      <div  className='h-30'>
        <Image src="/other.jpg" height={130} width={150} className='overflow-hidden h-[120px] ml-4 mt-3 w-[150px] rounded-lg animation ease-in duration-300 animate hover:rounded-none'></Image>
        <h1 className='text-3xl text-[25px] p-2 font-extrabold text-center mont-max violet-gradient '>foreign stocks</h1>
      </div>
    </motion.div>
    </Tilt>
    </motion.div>
  )
}

export default page