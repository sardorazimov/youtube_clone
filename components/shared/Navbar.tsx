import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Input } from '../ui/input'

const Navbar = () => {
  return (
    <div className=''>
    <nav className="  border-b border-white/15 fixed z-50 w-full bg-transparent backdrop-blur-lg px-6 py-4 lg:px-10">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/logo.svg"
          width={32}
          height={32}
          alt="yoom logo"
          className="max-sm:size-10"
        />
        <p className="text-[26px] font-extrabold text-white max-sm:hidden">
          Premium
        </p>
      </Link>
      <div className='lg:flex hidden items-center justify-center -my-10  w-full'>
        <div className='w-96 rounded-xl'>
          <Input  className='rounded-xl border-white/10 w-full' placeholder='Uzmir Poralab' />
        </div>
      </div>
      <div className="justify-end flex -mt-10 gap-5">
        <img src="/svgs/video.svg" alt="" className='w-10 h-10 rounded-full' />
        <img src="/svgs/notif.svg" alt="" className='w-10 h-10 rounded-full ' />
        <img src="/vercel.jpeg" alt="" className='w-10 h-10 rounded-full' />
      </div>
   
    </nav>
    </div>
  )
}

export default Navbar