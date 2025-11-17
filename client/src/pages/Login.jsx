import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
const Login = () => {


 const { backendUrl, token, setToken } = useContext(AppContext)
 const navigate = useNavigate()


 const [ state, setState ] = useState('Sign Up')
 const [ email, setEmail ] = useState('')
 const [ password, setPassword ] = useState('')
 const [ name, setName ] = useState('')
  const onSubmitHandler = async (event)=>{
   event.preventDefault()


   try{
     if( state === 'Sign Up' ){
       const { data } = await axios.post( backendUrl + '/api/user/register', { name, password, email } )
       if( data.success ){
         localStorage.setItem( 'token', data.token )
         setToken( data.token )
       } else{
         toast.error( data.message )
       }
     } else{
       const { data } = await axios.post( backendUrl + '/api/user/login', { password, email } )
       if( data.success ){
         localStorage.setItem( 'token', data.token )
         setToken( data.token )
       } else{
         toast.error( data.message )
       }
     }
   } catch(error){
     toast.error( error.message )
   }


 }


 useEffect(()=>{
   if(token){
     navigate('/')
   }
 }, [ token ])


  return (
   <div>
   <form onSubmit={onSubmitHandler} className='min-h-[80vh] flex items-center' action="">
     <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border border-gray-200 rounded-lg shadow-lg bg-white p-6 hover:shadow-xl transition-shadow duration-300'>
       <p className='text-2xl font-semibold'>{ state === 'Sign Up' ? 'Create Account' : 'Login'}</p>
       <p>Please { state === 'Sign Up' ? 'sign up' : 'log in' } to book an appointment</p>
       {
         state === 'Sign Up'
         &&
         <div className='w-full'>
         <p>Full Name</p>
         <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="text" onChange={(e)=>setName(e.target.value)} value={name} required />
       </div>
       }
       <div className='w-full'>
         <p>Email</p>
         <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="email" onChange={(e)=>setEmail(e.target.value)} value={email} required />
       </div>
       <div className='w-full'>
         <p>Password</p>
         <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="password" onChange={(e)=>setPassword(e.target.value)} value={password} required />
       </div>
       <button type='submit' className='bg-primary-500 text-white w-full py-2 rounded-md text-base cursor-pointer'>{ state === 'Sign Up' ? 'Create Account' : 'Login' }</button>
       {
         state === 'Sign Up' ? <p>Already have an account? <span onClick={()=>setState('Login')} className='text-blue-500 underline cursor-pointer'>Login here</span></p>
         :
         <p>Create a new account? <span onClick={()=>setState('Sign Up')} className='text-blue-500 underline cursor-pointer'>click here</span></p>
       }
     </div>
   </form>
   <div onClick={()=>{ window.location.href = "http://localhost:5174" }} className='relative cursor-pointer'>
   <div className="absolute top-[-100px] w-64 p-6 bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-xl shadow-xl border border-gray-700">
     <div className="mt-8 text-gray-300 select-text">
       {/* Additional admin content can go here */}
       <p className="text-lg font-semibold mb-2">Welcome, Admin!</p>
       <p className="text-sm opacity-70">Manage your dashboard settings and user roles here.</p>
     </div>
   </div>
   </div>
   </div>
 )
}


export default Login