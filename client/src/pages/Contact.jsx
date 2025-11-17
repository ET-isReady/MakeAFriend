import React from 'react'
import { assets } from '../assets/assets'


const Contact = () => {
 return (
   <div>
     <div className='text-center text-2xl pt-10 text-gray-500'>
       <p className='text-gray-700 font-semibold'>CONTACT US</p>
     </div>
     <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
       <img className='w-full md:max-w-[360px]' src={ assets.Children } alt="children" />
       <div className='flex flex-col justify-center items-start gap-6'>
         <p className='font-semibold text-lg text-gray-600'>Our OFFICE</p>
         <p className='text-gray-500'>5177 W. Road St. <br /> Suite 350, Boise,ID USA</p>
         <p className='text-gray-500'>Tel: (555) 555-5555 <br /> Email: someemailaddress@gmail.com</p>
         <p className='font-semibold text-lg text-gray-600'>Careers at MAKE A FRIEND</p>
         <p className='text-gray-500'>Learn more about our team and job openings.</p>
         <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500 cursor-pointer'>Explore Jobs</button>
       </div>
     </div>
   </div>
 )
}


export default Contact