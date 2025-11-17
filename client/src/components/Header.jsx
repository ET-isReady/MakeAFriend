import React from 'react'
import { assets } from '../assets/assets'


const Header = () => {
 return (
   <div className='flex flex-col md:flex-row flex-wrap bg-primary-500 rounded-lg px-6 md:px-10 lg:px-20'>
       {/* ----------- Left Side ----------- */}
       <div className='md:w-4/9 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
           <p className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight'>
               Book Appointment <br /> To Build A Zoo Friend
           </p>
           {/* <div className='w-35'> */}
           <div className='flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light'>
               <img className='w-28' src={ assets.group_profiles } alt='' />
               <p className='w-110'>Simply browse through our extensive list of service times,<br className='hidden sm:block' /> schedule your appointment hassle-free.</p>
           </div>
           <a href='#services' className='flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300'>
               Book appointment
           </a>
       </div>
       {/* ----------- Right Side ----------- */}
       <div className='w-5/9 relative hidden md:block'>
           <img className='left-25 lg:h-8/9 lg:w-11/12  md:h-8/9 md:w-11/12 md:absolute bottom-10 top-9 rounded-lg' src={ assets.header_img } alt='' />
       </div>
   </div>
 )
}


export default Header