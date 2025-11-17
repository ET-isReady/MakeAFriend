import React, { useContext, useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'


const Services = () => {


 const [ filterService, setFilterService ] = useState([])
 const [ showFilter, setShowFilter ] = useState(false)
 const navigate = useNavigate()


 const { speciality } =  useParams()


 const { services } = useContext(AppContext)


 const applyFilter = ()=>{
   if(speciality){
     setFilterService( services.filter(data => data.speciality === speciality ))
   } else{
     setFilterService(services)
   }
 }


 useEffect(()=>{
   applyFilter()
 }, [services, speciality])


 return (
   <div>
     <p className='text-gray-600'>Browse all of our friends</p>
     <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
       <button className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${showFilter ? 'bg-primary-500 text-white' : ''}`} onClick={()=>setShowFilter(prev => !prev)}>Filters</button>
       <div className={`flex-col gap-3 text-sm text-gray-600 ${ showFilter ? 'flex' : 'hidden sm:flex'}`}>
         <p onClick={()=> speciality === 'Lion' ? navigate('/services') : navigate('/services/Lion')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Lion' ? 'bg-indigo-100 text-black' : ''}`}>Mr. Lion</p>
         <p onClick={()=> speciality === 'Tiger' ? navigate('/services') : navigate('/services/Tiger')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Tiger' ? 'bg-indigo-100 text-black' : ''}`}>Miss Tiger</p>
         <p onClick={()=> speciality === 'Bear' ? navigate('/services') : navigate('/services/Bear')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Bear' ? 'bg-indigo-100 text-black' : ''}`}>Dr. Bear</p>
         <p onClick={()=> speciality === 'T-Rex' ? navigate('/services') : navigate('/services/T-Rex')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'T-Rex' ? 'bg-indigo-100 text-black' : ''}`}>Sir T-Rex</p>
         <p onClick={()=> speciality === 'Alien' ? navigate('/services') : navigate('/services/Alien')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Alien' ? 'bg-indigo-100 text-black' : ''}`}>Xotaru</p>
         <p onClick={()=> speciality === 'Children' ? navigate('/services') : navigate('/services/Children')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Children' ? 'bg-indigo-100 text-black' : ''}`}>Party of Friends</p>
       </div>
       <div className='w-full grid grid-cols-3 gap-4 gap-y-6'>
         {
             filterService.map(( item, index )=>(
               <div onClick={()=>navigate(`/appointment/${item._id}`)} key={ item._id } className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500'>
                   <img className='bg-blue-50' src={ item.image } />
                   <div className='p-4'>
                   <div className={`flex items-center gap-2 text-sm text-center ${ item.available ? 'text-green-500' : 'flash-red border-red-500 text-red-700 ml-2'}`}>
                   <p className={`w-2 h-2 ${item.available ? 'bg-green-500' : 'bg-red-500'}  rounded-full`}></p><p>{ item.available ? 'Available' : 'Out of Stock'}</p>
                   </div>
                       <p className='text-gray-900 text-lg font-medium'>{ item.name }</p>
                       <p className='text-gray-600 text-sm'>{ item.service }</p>
                   </div>
               </div>
           ))
         }
       </div>
     </div>
   </div>
 )
}


export default Services