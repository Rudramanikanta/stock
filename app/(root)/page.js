"use client"
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { slideInFromLeft, slideInFromTop } from "../utils/motion";
export default function Home() {
  return (
    <main className="justify-between absolute bg-opacity-100  top-[60px] z-[2] h-full w-full bg-transparent">
      <motion.div initial="hidden" animate="visible" className="flex justify-center lg:pt-[200px] sm:pt-[100px]  align-center flex-center">
        <form action="/home">
          <motion.button type="submit" variants={slideInFromTop} className={`p-2 py-1 hover:animate-bounce duration-150 hover:text-lg text-xl font-bold bg-transparent  bg-green-500 rounded-md mont-max font-Montserrat hover:bg-[#110a3a] ring-1 font-sans `} >let's begin</motion.button>
        </form>
      </motion.div>
      <motion.div initial="hidden" animate="visible" className="flex bottom-0 gap-x-[150px] p-20 mb-3 absolute bg-[#03001417] shadow-lg backdrop-blur-sm" >
        <motion.div variants={slideInFromTop} className="content-center justify-start p-5 mb-5 align-middle bottom-6">
          <h1 className="p-2 text-3xl font-bold leading-15 mont violet-gradient">About Us</h1>
          <p className="p-2 text-lg font-semibold leading-8 mont-max sm:w-fit w-[500px]">
            here , we understand the dynamic nature of financial markets
            and the challenges investors face in navigating them.
            Our team of seasoned analysts, data scientists,
            and market experts are dedicated to delivering
            reliable predictions that go beyond the surface,
            helping you stay ahead in the fast-paced world of
            stock trading.
          </p>
        </motion.div>
      </motion.div>
    </main>
  );
}
