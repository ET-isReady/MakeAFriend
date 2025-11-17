import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { AdminContext } from '../context/AdminContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { ServiceContext } from '../context/ServiceContext'


const Login = () => {


 const [ state, setState ] = useState('Admin')
 const [ email, setEmail ] = useState('')
 const [ password, setPassword ] = useState('')


 const { setAToken, backendUrl } = useContext( AdminContext )
 const { setOToken } = useContext(ServiceContext)


 const onSubmitHandler = async (event)=>{
   event.preventDefault()
   try{
     if( state === 'Admin' ){
       const { data } = await axios.post( backendUrl + '/api/admin/login', { email, password } )
       if( data.success ){
         localStorage.setItem( 'aToken', data.token )
         setAToken( data.token )
       } else{
         toast.error(data.message)
       }
     } else{


       const { data } = await axios.post( backendUrl + '/api/service/login', { email, password })


       if( data.success ){
         localStorage.setItem( 'oToken', data.token )
         setOToken( data.token )
         console.log( data.token );
        
       } else{
         toast.error(data.message)
       }


     }
   }catch(error){


   }
 }


 return (
   <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-zinc-900 via-gray-900 to-teal-900">
   <div className="w-full max-w-md p-8 space-y-8 bg-white/10 rounded-xl shadow-xl backdrop-blur-lg">
     {/* Logo or brand */}
     <div className="flex justify-center mb-4">
       <img className="h-12 w-12 rounded-full shadow-md" src={ assets.default_profile } alt="Admin Logo" />
     </div>
     <h2 className="mt-2 text-center text-3xl font-bold text-white tracking-tight">{ state } Login</h2>
     <form onSubmit={onSubmitHandler} className="mt-8 space-y-6">
       <div className="rounded-md shadow-sm space-y-4">
         <div>
           <label htmlFor="email" className="sr-only">Email address</label>
           <input
             onChange={(e)=>setEmail(e.target.value)}
             value={email}
             type='email'
             autoComplete='email'
             required
             className="appearance-none relative block w-full px-4 py-3 border-none rounded-lg bg-white/60 backdrop-blur-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
             placeholder="Email address"
           />
         </div>
         <div>
           <label htmlFor="password" className="sr-only">Password</label>
           <input
             onChange={(e)=>setPassword(e.target.value)}
             value={password}
             type='password'
             autoComplete="current-password"
             required
             className="appearance-none relative block w-full px-4 py-3 border-none rounded-lg bg-white/60 backdrop-blur-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600 transition"
             placeholder="Password"
           />
         </div>
       </div>
       <div className="flex items-center justify-between">
         <div className="flex items-center">
           <input
             id="remember-me"
             name="remember-me"
             type="checkbox"
             className="h-4 w-4 text-blue-600 border-gray-300 rounded"
           />
           <label htmlFor="remember-me" className="ml-2 block text-sm text-white cursor-pointer">
             Remember me
           </label>
         </div>
         <div className="text-sm">
           <a href="#" className="font-medium text-purple-400 hover:text-purple-300 transition">Forgot password?</a>
         </div>
       </div>
       <button
         type="submit"
         className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-lg font-semibold rounded-lg bg-gradient-to-r from-teal-900 to-zinc-900 text-white hover:from-purple-700 hover:to-blue-700 shadow-md transition cursor-pointer"
       >
         Sign In
       </button>

     </form>
   </div>
 </div>
 )
}


export default Login