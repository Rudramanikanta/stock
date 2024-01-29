import React from 'react'
import Topbar from './Topbar'

const Sample = () => {
  return (
    <div className='relative flex flex-col w-full h-full '>
        <video autoPlay muted loop className="rotate-180 absolute top-[-320px] left-0 z-[0] object-cover">
            <source src="/blackhole.webm" type="video/webm"></source>
        </video>
    </div>
  )
}

export default Sample