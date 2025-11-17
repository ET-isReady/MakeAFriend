import React, { useContext, useEffect, useState } from 'react'
import { AdminContext } from '../../context/AdminContext'
import { AppContext } from '../../context/AppContext'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'


const UpdateProfile = () => {


 const { id } = useParams()
 const { aToken, profileData, setProfileData, getProfileData, backendUrl } = useContext(AdminContext)
 const { currency } = useContext(AppContext)


 const [ isEdit, setIsEdit ] = useState(true)
 const [ image, setImage ] = useState(false)




 const updateProfile = async (e)=>{


   e.preventDefault();


   try {
    
       const formData = new FormData();
       formData.append('name', profileData.name);
       formData.append('about', profileData.about);
       formData.append('available', profileData.available);
       formData.append('fee', profileData.fee);
       if(image) formData.append('image', image);
      const { data } = await axios.post(
       `${backendUrl}/api/service/update-profile/${id}`,
       formData,
       { headers: { aToken } }
     );
      if (data.success) {
       toast.success(data.message);
       setIsEdit(false);
       await getProfileData()
     } else {
       toast.error(data.message);
     }
   } catch (error) {
     toast.error(error.message);
     console.log(error);
   }
 }


 useEffect(()=>{
   if(aToken){
     getProfileData(id)
   }
 }, [ aToken ])


 return profileData && (




   <form onSubmit={updateProfile}  className='w-full'>
   <div className="min-h-screen flex items-start justify-center bg-gray-50 mt-15">
     <div className="w-full max-w-3xl bg-white border border-gray-200 shadow-md rounded-xl p-8 md:p-10">
   
     {/* Avatar Section */}
     <div className="flex flex-col items-center mb-6">
     <label htmlFor="service-img">
       <img
         src={ image ? URL.createObjectURL(image) : profileData.image }
         className="w-80 h-75 object-cover rounded-lg border-4 border-blue-500 mb-2 shadow-lg"
       />
       </label>
       <input onChange={(e)=>setImage(e.target.files[0])} type="file" id="service-img" hidden />
     </div>


     {/* Form Fields */}
    
       <div>
         <p className='flex items-center gap-2 text-3xl font-medium text-gray-700'>Current Name:<span className='text-gray-800'> { isEdit ? <input type="text" onChange={(e)=>setProfileData( prev => ({ ...prev, name: e.target.value }))} value={ profileData.name } /> : profileData.name }</span></p>             
       </div>


       <div>
         <p className='flex items-center gap-1 text-sm font-medium text-neutral-800 mt-3'>About:</p>
         <p className='text-sm text-gray-600 max-w-[700px] mt-1'><span className='text-gray-800'> { isEdit ? <input type="text" onChange={(e)=>setProfileData( prev => ({ ...prev, about: e.target.value }))} value={ profileData.about } /> : profileData.about }</span></p>
       </div>


     
         <p className='text-gray-600 font-medium mt-4'>
               Current Fee: <span className='text-gray-800'>{ currency }{ isEdit ? <input type="number" onChange={(e)=>setProfileData( prev => ({ ...prev, fee: e.target.value }))} value={ profileData.fee } /> : profileData.fee }</span>             
           </p>
      


       <div className='flex gap-1 pt-2'>
         <input onChange={()=> isEdit && setProfileData( prev => ({...prev, available: !prev.available }))} checked={ profileData.available } type="checkbox" />
         <label htmlFor="">Available</label>
       </div>


       {/* Save Button */}




       {
         isEdit
         ?
         <button type="submit"  className="w-full mt-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-2 rounded-lg shadow hover:from-blue-700 hover:to-indigo-700 transition">Save</button>
         :
         <button onClick={()=>setIsEdit(false)} className="w-full mt-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-2 rounded-lg shadow hover:from-blue-700 hover:to-indigo-700 transition">Update Friend</button>
       }




     </div>
   </div>
   </form>
 
 )
}


export default UpdateProfile