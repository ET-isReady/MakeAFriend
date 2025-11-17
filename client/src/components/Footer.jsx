import React from 'react'
import { assets } from '../assets/assets'


const Footer = () => {
 return (
   <div className='md:mx-10'>
       <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>


           {/* ------------ Left Section -------------- */}
           <div>
               <div className='flex items-center cursor-pointer'>
               <img className='mb-5 w-15' src={ assets.round_logo } alt="" />
               <p className='font-serif text-blue-500 ml-4'>Make A Friend Zoo</p>
               </div>
               <p className='w-full md:w-2/3 text-gray-600 leading-6'>This company has established a strong brand identity protected by an extensive trademark portfolio covering product names, logos, packaging, and unique service elements, ensuring a unique market presence. Make A Friend Zoo also emphasizes a culture of heart and community, receiving recognition as a great workplace by Fortune and other institutions across multiple years. This company maintains a commitment to customer engagement through both in-store and digital experiences, including a virtual world and loyalty programs tied to real-world purchases.</p>
           </div>


           {/* ------------ Center Section -------------- */}
           <div>
               <p className='text-xl font-medium mb-5'>COMPANY</p>
               <ul className='flex flex-col gap-2 text-gray-600'>
                   <li>Home</li>
                   <li>About Us</li>
                   <li>Contact Us</li>
                   <li>Privacy Policy</li>
               </ul>
           </div>
          
           {/* ------------ Right Section -------------- */}
           <div>
           <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
               <ul className='flex flex-col gap-2 text-gray-600'>
                   <li>1 (208)-948-9424</li>
                   <li>admin@makeafriend.com</li>
               </ul>
           </div>


       </div>


           { /* ------------ Copyright ------------- */}


       <div>
           <hr />
           <p className='py-5 text-sm text-center'>Copyright { new Date().getFullYear() }@ Make A Friend Zoo - All Rights Reserved</p>
       </div>
   </div>
 )
}


export default Footer