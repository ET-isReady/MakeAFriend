import React from 'react'
import { useContext } from 'react'
import { AdminContext } from '../../context/AdminContext'
import { useEffect } from 'react'
import { assets } from '../../assets/assets'


const Dashboard = () => {


 const { aToken, getDashData, completeAppointment, cancelAppointment, dashData } = useContext( AdminContext )


 useEffect(()=>{
   if(aToken){
     getDashData()
   }
 }, [aToken])


 return dashData && (
   <div className='m-5'>
     <div className='flex flex-wrap gap-3'>


       <div className='flex items-center gap-2 bg-white p-4 min-w-52 rounded border-2 border-gray-100 cursor-pointer hover:scale-105 transition-all'>
         <img className='w-14' src={ assets.appointments2 } alt="services logo" />
         <div>
           <p className='text-xl font-semibold text-gray-600'>{ dashData.services }</p>
           <p className='text-gray-400'>Friends/Services</p>
         </div>
       </div>


       <div className='flex items-center gap-2 bg-white p-4 min-w-52 rounded border-2 border-gray-100 cursor-pointer hover:scale-105 transition-all'>
         <img className='w-14' src={ assets.tasks_icon } alt="appointments logo" />
         <div>
           <p className='text-xl font-semibold text-gray-600'>{ dashData.appointments }</p>
           <p className='text-gray-400'>Appointments</p>
         </div>
       </div>


       <div className='flex items-center gap-2 bg-white p-4 min-w-52 rounded border-2 border-gray-100 cursor-pointer hover:scale-105 transition-all'>
         <img className='w-14' src={ assets.users } alt="services logo" />
         <div>
           <p className='text-xl font-semibold text-gray-600'>{ dashData.clients }</p>
           <p className='text-gray-400'>Users</p>
         </div>
       </div>


       <div className='flex items-center gap-2 bg-white p-4 min-w-52 rounded border-2 border-gray-100 cursor-pointer hover:scale-105 transition-all'>
         <img className='w-10' src={ assets.earnings } alt="services logo" />
         <div>
           <p className='text-xl font-semibold text-gray-600'>{ dashData.earnings }</p>
           <p className='text-gray-400'>Earnings</p>
         </div>
       </div>


     </div>
     <div className='bg-white'>
       <div className='flex items-center gap-2.5 px-4 py-4 mt-10 rounded-t border border-gray-300'>
         <img className='w-8' src={ assets.appointments_icon } alt="duties list" />
         <p className='font-semibold'>Latest Bookings</p>
       </div>
       <div className='pt-4 border border-t-0 border-gray-300'>
         {
           dashData.latestAppointments.map(( item, index)=>(
             <div className='flex items-center px-6 py-3 gap-3 hover:bg-gray-100' key={ index }>
               <img className='rounded-full w-10' src={ item.serviceData.image } alt='service image' />
               <div className='flex-1 text-sm'>
                 <p className='text-gray-800 font-medium'>{ item.serviceData.name }</p>
                 <p className='text-gray-600'>{ item.slotDate }</p>
               </div>
             {
             item.cancelled
             ? <p className='text-red-400 text-xs font-medium'>Cancelled</p>
             :
             item.isCompleted ?
             <p className='text-green-500 text-xs font-medium'>Completed</p>
             :
             <div className='flex'>
             <img onClick={()=>cancelAppointment( item._id )} className='w-10 cursor-pointer' src={ assets.cancel_icon } alt="cancelled" />
             <img onClick={()=>completeAppointment( item._id )} className='w-10 cursor-pointer' src={ assets.tick_icon } alt="completed" />
             </div>
             }
             </div>
           ))
         }
       </div>
     </div>
   </div>
 )
}


export default Dashboard