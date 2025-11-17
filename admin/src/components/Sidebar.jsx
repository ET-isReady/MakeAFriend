import React, { useContext } from 'react'
import { AdminContext } from '../context/AdminContext'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'
// import { ServiceContext } from '../context/ServiceContext'




const Sidebar = () => {


   const { aToken } = useContext(AdminContext)
   // const { oToken } = useContext(ServiceContext)


 return (
   <div className='min-h-screen bg-white border-r border-gray-200'>
       {
           aToken && <ul className='text-[#515151] mt-5'>


               <NavLink className={({ isActive })=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${ isActive ? 'bg-[#F2F3FF] border-r-4 border-primary-500' : ''}` } to={'/admin-dashboard'}>
                   <img className='w-10' src={ assets.dashboard_icon } alt="dashboard icon" />
                   <p className='hidden md:block'>Dashboard</p>
               </NavLink>


               <NavLink className={({ isActive })=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${ isActive ? 'bg-[#F2F3FF] border-r-4 border-primary-500' : ''}` } to={'/all-appointments'}>
                   <img className='w-10' src={ assets.appointments_icon } alt="appointments icon" />
                   <p className='hidden md:block'>Appointments</p>
               </NavLink>


               <NavLink className={({ isActive })=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${ isActive ? 'bg-[#F2F3FF] border-r-4 border-primary-500' : ''}` } to={'/add-service'}>
                   <img className='w-10' src={ assets.add_service } alt="add service" />
                   <p className='hidden md:block'>Add Friend</p>
               </NavLink>


               <NavLink className={({ isActive })=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${ isActive ? 'bg-[#F2F3FF] border-r-4 border-primary-500' : ''}` } to={'/services-list'}>
                   <img className='w-10' src={ assets.services_list } alt="services list" />
                   <p className='hidden md:block'>Friends List</p>
               </NavLink>


               <NavLink className={({ isActive })=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${ isActive ? 'bg-[#F2F3FF] border-r-4 border-primary-500' : ''}` } to={'/update-profile'}>
                   <img className='w-10' src={ assets.update } alt="other profile" />
                   <p className='hidden md:block'>Update Friend</p>
               </NavLink>
           </ul>
       }
   </div>
 )
}


export default Sidebar