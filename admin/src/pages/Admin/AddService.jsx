import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import { AdminContext } from '../../context/AdminContext'
import { toast } from 'react-toastify'
import axios from 'axios'


const AddService = () => {


   const [ serviceImg, setServiceImg ] = useState(false)
   const [ name, setName ] = useState('')
   const [ email, setEmail ] = useState('')
   const [ password, setPassword ] = useState('')
   const [ experience, setExperience ] = useState('1 Year')
   const [ fee, setFee ] = useState('')
   const [ about, setAbout ] = useState('')
   const [ speciality, setSpeciality ] = useState('Lion')
   const [ degree, setDegree ] = useState('')
   const [ address1, setAddress1 ] = useState('')
   const [ address2, setAddress2 ] = useState('')


   const { backendUrl, aToken } = useContext(AdminContext)


   const onSubmitHandler = async (event)=>{
       event.preventDefault()
       try{
           if(!serviceImg){
               return toast.error('Image not selected! An image must be selected for a new product/service.')
           }
           const formData = new FormData()


           formData.append( 'image', serviceImg )
           formData.append( 'name', name )
           formData.append( 'email', email )
           formData.append( 'password', password )
           formData.append( 'experience', experience )
           formData.append( 'fee', Number(fee) )
           formData.append( 'about', about )
           formData.append( 'speciality', speciality )
           formData.append( 'degree', degree )
           formData.append( 'address', JSON.stringify({line1:address1, line2:address2}) )


           //console.log formData
           formData.forEach(( value, key ) => {
               console.log(`${key} : ${value}`);
              
           })


           const {data} = await axios.post(backendUrl + '/api/admin/add-service', formData, {headers: { aToken }})


           if(data.success){
               toast.success(data.message)
               setServiceImg(false)
               setName('')
               setEmail('')
               setPassword('')
               setAddress1('')
               setAddress2('')
               setDegree('')
               setAbout('')
               setFee('')
           } else{
               toast.error(data.message)
           }


       } catch(error){
           toast.error(error.message)
           console.log(error)
       }
   }


 return (
   <form onSubmit={onSubmitHandler} className='m-5 w-full'>
       <p className='mb-3 text-lg font-medium'>New Friend/Service Details</p>
       <div className='bg-white px-8 py-7 border border-gray-300 rounded w-full max-w-4x1 max-h-[80vh] overflow-y-scroll'>


           <div className='flex items-center gap-4 mb-8 text-gray-500'>
               <label htmlFor="service-img">
                   <img className='w-30 bg-gray-100 rounded-full cursor-pointer' src={ serviceImg ? URL.createObjectURL(serviceImg) : assets.default_profile } alt="service image" />
               </label>
               <input onChange={(e)=>setServiceImg(e.target.files[0])} type="file" id="service-img" hidden />
               <p>Upload New Friend <br /> Image</p>
           </div>


           <div className='flex flex-col lg:flex-row items-start gap-10 text-gray-600'>
               <div className='w-full lg:flex-1 flex flex-col gap-4'>


                   <div className='flex-1 flex flex-col gap-1'>
                       <p>New Friend Name</p>
                       <input onChange={(e)=>setName(e.target.value)} value={name} className='border border-gray-300 rounded px-3 py-2 placeholder-gray-400' type="text" placeholder='Name' required />
                   </div>


                   <div className='flex-1 flex flex-col gap-1'>
                       <p>New Friend Email</p>
                       <input onChange={(e)=>setEmail(e.target.value)} value={email} className='border border-gray-300 rounded px-3 py-2 placeholder-gray-400' type="email" placeholder='Email' required />
                   </div>


                   <div className='flex-1 flex flex-col gap-1'>
                       <p>New Friend Password</p>
                       <input onChange={(e)=>setPassword(e.target.value)} value={password} className='border border-gray-300 rounded px-3 py-2 placeholder-gray-400' type="password" placeholder='Password' required />
                   </div>


                   <div className='flex-1 flex flex-col gap-1'>
                       <p>Experience</p>
                       <select onChange={(e)=>setExperience(e.target.value)} value={experience} name="" id="">
                           <option value="1 Year">1 Year</option>
                           <option value="2 Years">2 Years</option>
                           <option value="3 Years">3 Years</option>
                           <option value="4 Years">4 Years</option>
                           <option value="5 Years">5 Years</option>
                           <option value="6 Years">6 Years</option>
                           <option value="7 Years">7 Years</option>
                           <option value="8 Years">8 Years</option>
                           <option value="9 Years">9 Years</option>
                           <option value="10 Year">10 Years</option>
                       </select>
                   </div>


                   <div className='flex-1 flex flex-col gap-1'>
                       <p>Fee</p>
                       <input onChange={(e)=>setFee(e.target.value)} value={fee} className='border border-gray-300 rounded px-3 py-2 placeholder-gray-400' type="number" placeholder='Fee' required />
                   </div>
               </div>


               <div className='w-full lg:flex-1 flex flex-col gap-4'>      
                   <div className='flex-1 flex flex-col gap-1'>
                       <p>Speciality</p>
                       <select onChange={(e)=>setSpeciality(e.target.value)} value={speciality} className='border border-gray-300 rounded px-3 py-2' name="" id="">
                           <option value="Lion">Lion</option>
                           <option value="Tiger">Tiger</option>
                           <option value="Bear">Bear</option>
                           <option value="TRex">TRex</option>
                           <option value="Alien">Alien</option>
                           <option value="Children">Children</option>
                       </select>
                   </div>


                   <div className='flex-1 flex flex-col gap-1'>
                       <p>Education</p>
                       <input onChange={(e)=>setDegree(e.target.value)} value={degree} className='border border-gray-300 rounded px-3 py-2 placeholder-gray-400' type="text" placeholder='Education' required />
                   </div>
                   <div className='flex-1 flex flex-col gap-1'>
                       <p>Address</p>
                       <input onChange={(e)=>setAddress1(e.target.value)} value={address1} className='border border-gray-300 rounded px-3 py-2 placeholder-gray-400' type="text" placeholder='Address 1' required />
                       <input onChange={(e)=>setAddress2(e.target.value)} value={address2} className='border border-gray-300 rounded px-3 py-2 placeholder-gray-400' type="text" placeholder='Address 2' required />
                   </div>
               </div>
           </div>
                   <div>
                       <p className='mt-4 mb-2'>New Friend/Service Info</p>
                       <textarea onChange={(e)=>setAbout(e.target.value)} value={about} className='w-full px-4 pt-2 border border-gray-300 rounded placeholder-gray-400' placeholder="Enter into this field details about the new service being offered" row={5} required />
                   </div>
                   <button type='submit' className='bg-primary-500 px-10 py-3 mt-4 text-white rounded-full'>Add New Friend</button>
       </div>
   </form>
 )
}


export default AddService