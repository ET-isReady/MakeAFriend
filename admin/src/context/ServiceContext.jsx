import { useState } from "react";
import { createContext } from "react";
import axios from 'axios'
import { toast } from 'react-toastify'


export const ServiceContext = createContext()


const ServiceContextProvider = (props)=>{


   const backendUrl = import.meta.env.VITE_BACKEND_URL


   const [ aToken, setAToken ] = useState( localStorage.getItem('aToken') ? localStorage.getItem('aToken') : '')
   const [ appointments, setAppointments ] = useState([])
   const [ profileData, setProfileData ] = useState(false)






   const getProfileData = async ()=>{
       try{


           const { data } = await axios.get( backendUrl, + '/api/service/profile', { headers: { aToken }})
           if( data.success ){
               setProfileData( data.profileData )
               console.log( data.profileData )
           }


       } catch(error){
           console.log(error)
           toast.error(error.message)
       }
   }


   const value = {
       aToken,
       setAToken,
       backendUrl,
       appointments,
       setAppointments,
       profileData,
       setProfileData,
       getProfileData
   }
   return(
       <ServiceContext.Provider value={ value }>
           { props.children }
       </ServiceContext.Provider>
   )
}


export default ServiceContextProvider