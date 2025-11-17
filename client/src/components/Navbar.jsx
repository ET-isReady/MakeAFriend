import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
const Navbar = () => {


   const navigate = useNavigate()


   const { token, setToken, userData } = useContext(AppContext)
   const [ showMenu, setShowMenu ] = useState(false)


   const logout = ()=>{
       setToken(false)
       localStorage.removeItem('token')
       navigate('/login')
   }


 return (
   <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
       <div onClick={()=>navigate('/')} className="flex items-center cursor-pointer">
       <img className='w-20' src={ assets.round_logo } alt='' />
       <h1 className="text-[22px] text-center font-serif text-blue-500 ml-4">Make A Friend Zoo</h1>
       </div>
       <ul className='hidden md:flex items-start gap-5 font-medium'>
           <NavLink to='/'>
               <li className='py-1'>HOME</li>
               <hr className='border-none outline-none h-0.5 bg-primary-50 w-3/5 m-auto hidden' />
           </NavLink>
           <NavLink to='/services'>
               <li className='py-1'>ALL SERVICES</li>
               <hr className='border-none outline-none h-0.5 bg-primary-50 w-3/5 m-auto hidden' />
           </NavLink>
           <NavLink to='/about'>
               <li className='py-1'>ABOUT</li>
               <hr className='border-none outline-none h-0.5 bg-primary-50 w-3/5 m-auto hidden' />
           </NavLink>
           <NavLink to='/contact'>
               <li className='py-1'>CONTACT</li>
               <hr className='border-none outline-none h-0.5 bg-primary-50 w-3/5 m-auto hidden' />
           </NavLink>
       </ul>
       {/* <div className='flex items-center relative w-full justify-center gap-6'> */}
       <div className='flex items-center gap-6'>
           {
               token && userData ?
               <div className='flex items-center gap-2 cursor-pointer group absolute'>
                   {/* <img className='w-8 rounded-full' src={ assets.defaultImage } alt='' /> */}
                   <img className='w-12 hidden sm:block rounded-full' src={ userData.image } alt='' />
                   <img className='w-2.5' src={ assets.dropdown_icon } alt='' />
                   <div className='group absolute w-20 top-0 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                       <div className='relative right-30 mt-23 min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                           <p onClick={()=>navigate('my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                           <p onClick={()=>navigate('my-appointments')} className='hover:text-black cursor-pointer'>My Appointments</p>
                           <p onClick={logout} className='hover:text-black cursor-pointer'>Logout</p>
                       </div>
                   </div>
               </div>
               :
               <button onClick={()=>navigate('/login')} className='bg-primary-100 text-white px-8 py-3 rounded-full font-light hidden md:block cursor-pointer'>Create Account</button>
           }
           <img onClick={()=>setShowMenu(true)} className='w-12 absolute left-8/9 block md:hidden' src={ assets.menu_icon } alt="menu icon" />
           {/* ------------ Mobile Menu --------------- */}
           <div className={`${showMenu ? 'fixed w-full' : 'h-0 w-0'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
               <div className='flex items-center justify-between px-5 py-6'>
                   <img className='w-20' src={ assets.round_logo } alt="" />
                   <h1 className="text-[22px] text-center font-serif text-blue-500 ml-4">Make A Friend Zoo</h1>
                   <img className='w-7' onClick={()=>setShowMenu(false)} src={ assets.cross_icon } alt="" />
               </div>
               <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
                   <NavLink onClick={()=>setShowMenu(false)} to='/'><p className='px-4 py-2 rounded inline-block'>Home</p></NavLink>
                   <NavLink onClick={()=>setShowMenu(false)} to='/services'><p className='px-4 py-2 rounded inline-block'>All Services</p></NavLink>
                   <NavLink onClick={()=>setShowMenu(false)} to='/about'><p className='px-4 py-2 rounded inline-block'>About</p></NavLink>
                   <NavLink onClick={()=>setShowMenu(false)} to='/contact'><p className='px-4 py-2 rounded inline-block'>Contact</p></NavLink>
               </ul>
           </div>
       </div>
   </div>
 )
}


export default Navbar