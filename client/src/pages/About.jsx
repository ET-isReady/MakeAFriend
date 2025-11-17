import React from 'react'
import { assets } from '../assets/assets'


const About = () => {
 return (
   <div>
     <div className='text-center text-2xl pt-10 text-gray-500'>
       <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
     </div>
     <div className='my-10 flex flex-col md:flex-row gap-12'>
       <img className='w-full md:max-w-[360px]' src={ assets.Woman} alt="woman" />
       <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
         <p>Welcome to [Your Company Name], where passion meets purpose. Founded with a simple idea—to create meaningful solutions for everyday challenges—we’ve grown into a team dedicated to innovation, authenticity, and customer satisfaction.</p>
         <p>Our journey began when we noticed a gap in [describe your industry or product area], and decided to bridge it with creative ideas and hard work. Since then, we’ve helped countless customers [describe your main benefit, like “build their online presence,” “find their style,” or “simplify their workflow”].</p>
         <p>At the heart of everything we do is our mission: to deliver quality, transparency, and value. Our team thrives on collaboration, bringing diverse skills and perspectives together to make every product and interaction better than the last.</p>
         <b className='text-gray-800'>Our Vision</b>
         <p>We believe that great things happen when you care about people and progress in equal measure. Thank you for joining us on this journey—your support inspires us to grow, innovate, and make a difference every day.</p>
       </div>
     </div>
     <div className='text-xl my-4'>
       <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
     </div>
     <div className='flex flex-col md:flex-row mb-20'>
       <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary-500 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
         <b>EFFICIENCY:</b>
         <p>Streamlined Appointment Scheduling That Fits Into Your Busy Lifestyle.</p>
       </div>
       <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary-500 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
       <b>CONVENIENCE:</b>
       <p>Access To A Network Of Trusted Doll-building Professionals In Your Area.</p>
       </div>
       <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary-500 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
       <b>PERSONALIZATION:</b>
       <p>Tailored Recommendations And Reminders To Help You Stay On Top Of Your Health.</p>
       </div>
     </div>
   </div>
 )
}


export default About