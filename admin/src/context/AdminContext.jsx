import { createContext, useState } from "react";
import axios from 'axios'
import { toast } from 'react-toastify'


export const AdminContext = createContext()


const AdminContextProvider = (props)=>{


       const [ services, setServices ] = useState([])
       const [ appointments, setAppointments ] = useState([])
       const [ dashData, setDashData ] = useState(false)
       const [ profileData, setProfileData ] = useState(false)
       const [ aToken, setAToken ] = useState( localStorage.getItem('aToken') ? localStorage.getItem('aToken') : '')
       const backendUrl = import.meta.env.VITE_BACKEND_URL


       const getAllServices = async()=>{
           try{
               const { data } = await axios.post( backendUrl + '/api/admin/all-services', {}, { headers: { aToken }})
               if(data.success){
                   setServices(data.services)
                   console.log('Here is the list of all services: ', data.services)
               } else{
                   toast.error(data.message)
               }
           } catch(error){
               toast.error(error.message)
           }
       }
      
       const changeAvailability = async ( serviceId )=>{
           try{
               const { data } = await axios.post( backendUrl + '/api/admin/change-availability', { serviceId }, { headers: { aToken }})
               if(data.success){
                   toast.success(data.message)
                   getAllServices()
               } else{
                   toast.error(data.message)
               }
           } catch(error){
               toast.error(error.message)
           }
       }


       const getAllAppointments = async ()=>{
           try{


               const { data } = await axios.get( backendUrl + '/api/admin/appointments', { headers: { aToken }})
               if( data.success ){
                   setAppointments( data.appointments )
                  
               } else{
                   toast.error( data.message )
               }
           } catch(error){
               toast.error(error.message)
           }
       }




       const completeAppointment = async ( appointmentId )=>{
           try{


               const { data } = await axios.post( backendUrl + '/api/service/complete-appointment', { appointmentId }, { headers: { aToken }})
               if(data.success){
                   toast.success( data.message )
                   getAllAppointments()
               } else{
                   toast.error( data.message )
               }
           } catch(error){
               console.log(error)
               toast.error(error.message)
           }
       }




       const cancelAppointment = async ( appointmentId )=>{
           try{


               const { data } = await axios.post( backendUrl + '/api/admin/cancel-appointment', { appointmentId }, { headers: { aToken }})
               if( data.success ){
                   toast.error( data.message )
                   getAllAppointments()
               } else{
                   toast.error( data.message )
               }


           } catch(error){
               toast.error(error.message)
           }
       }


       const getDashData = async ()=>{
           try{


               const { data } = await axios.get( backendUrl + '/api/admin/dashboard', { headers: { aToken }})
               if( data.success ){
                   setDashData( data.dashData )
                  
               } else{
                   toast.error( data.message )
               }


           } catch(error){
               toast.error(error.message)
           }
       }


       const getProfileData = async (id)=>{
          
           try{
  
               const { data } = await axios.get( `${backendUrl}/api/service/update-profile/${id}`, { headers: { aToken }})
               if( data.success ){
                   setProfileData( data.profileData )
                   console.log( 'Here is your profile data: ', data.profileData )
               }
  
           } catch(error){
               console.log(error)
               toast.error('Here', error.message)
           }
       }


   const value = {
       aToken, setAToken,
       backendUrl,
       services,
       getAllServices,
       changeAvailability,
       appointments,
       setAppointments,
       getAllAppointments,
       completeAppointment,
       cancelAppointment,
       dashData,
       getDashData,
       profileData,
       setProfileData,
       getProfileData
   }


   return(
       <AdminContext.Provider value={ value }>
           { props.children }
       </AdminContext.Provider>
   )
}


export default AdminContextProvider