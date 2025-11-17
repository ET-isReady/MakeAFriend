import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { Link } from 'react-router-dom'
const ServicesMenu = () => {


 const { services } = useContext(AppContext)
  return (
   <div className='flex flex-col items-center gap-4 py-16 text-gray-800' id='services'>
       <h1 className='text-3xl font-medium'>Select a Service</h1>
       <p className='sm:w-1/3 text-center text-sm'>Browse all of our animal friends, and select the one that's best for you!</p>
       <div className='flex sm:justify-center gap-4 pt-5 overflow-scroll'>
           { services.map((item, index)=>(
               <Link onClick={()=>scrollTo(0,0)} className='flex flex-col items-center text-xs cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index} to={`/services/${ item.service }`}>
                   <img className='lg:w-50 sm:w-24 rounded-full' src={ item.image } alt='' />
                   <p className='text-center'>{ item.name }</p>
               </Link>
           ))}
       </div>
   </div>
 )
}


export default ServicesMenu