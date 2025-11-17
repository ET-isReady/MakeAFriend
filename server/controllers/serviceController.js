import serviceModel from "../models/serviceModel.js"
import { v2 as cloudinary } from 'cloudinary'
import appointmentModel from "../models/appointmentModel.js"


const changeAvailability = async (req, res)=>{
   try{
       const { serviceId } = req.body
       const serviceData = await serviceModel.findById(serviceId)
       await serviceModel.findByIdAndUpdate( serviceId, { available: !serviceData.available })
       res.json({ success:true, message: 'Availability Changed!' })
   } catch(error){
       console.log(error)
       res.json({ success:false, message:error.message })
   }
}


const serviceList = async (req, res)=>{
   try{


       const services = await serviceModel.find({}).select(['-password', '-email'])


       res.json({ success:true, services })


   } catch(error){
       console.log(error)
       res.json({ success:false, message:error.message })
   }
}






// API to get update appointments for update panel
const updateAppointments = async (req, res)=>{
   try{


       const { adminId } = req.body
       const appointments = await appointmentModel.find({ adminId })


       res.json({ success:true, appointments })


   } catch(error){
       console.log(error)
       res.json({ success:false, message:error.message })
   }
}


// API to mark appointment completed for update panel
const appointmentComplete = async (req, res)=>{
   try{


       const { adminId, appointmentId } = req.body


       const appointmentData = await appointmentModel.findById(appointmentId)
       if( appointmentData && appointmentData.adminId === adminId ){
           await appointmentModel.findByIdAndUpdate( appointmentId, { isCompleted: true } )
           return res.json({ success:true, message: 'Appointment Completed' })
       } else{
           return res.json({ success:false, message: 'Appointment Failed' })


       }


   } catch(error){
       console.log(error)
       res.json({ success:false, message:error.message })
   }
}


// API to mark appointment cancelled for update panel
//HERE IS WHERE YOU NEED TO ADD THE DELETION CODE
const appointmentCancelled = async (req, res) => {
   try {
     const userId = req.user.id; // assuming the authentication middleware sets req.user from the token
     const { appointmentId } = req.body;
      const appointmentData = await appointmentModel.findById(appointmentId);
      // Check if appointment exists and belongs to the logged-in user
     if (appointmentData && appointmentData.userId === userId) {
      
       // Delete appointment
       await appointmentModel.findByIdAndDelete(appointmentId);
        return res.json({ success: true, message: 'Appointment deleted successfully' });
     } else {
       return res.json({ success: false, message: 'Deletion failed: Unauthorized or appointment not found' });
     }
   } catch (error) {
     console.log(error);
     res.json({ success: false, message: error.message });
   }
 };






// API to get dashboard data for update panel
const updateDashboard = async (req, res)=>{
   try{


       const { adminId } = req.body
       const appointments = await appointmentModel.find({ adminId })


       let earnings = 0


       appointments.map(( item )=>{
           if( item.isCompleted || item.payment ){
               earnings += item.amount
           }
       })


       let users = []
       appointments.map(( item )=>{
           if( !users.includes( item.userId )){
               users.push( item.userId )
           }
       })
       const dashData = {
           earnings,
           appointments: appointments.length,
           users: users.length,
           latestAppointment: appointments.reverse().slice(0, 5)
       }
       res.json({ success:true, dashData })


   } catch(error){
       console.log(error)
       res.json({ success:false, message:error.message })
   }
}


// API to get update Profile for update Panel
const getProfile = async (req, res)=>{
   try{


       const { id } = req.params
       const profileData = await serviceModel.findById( id ).select('-password')


       res.json({ success:true, profileData })


   } catch(error){
       console.log(error)
       res.json({ success:false, message:error.message })
   }
}


// API to update profile data from update panel
const updateProfile = async (req, res)=>{
   try{


       const { id } = req.params


       const { name, about, available, fee } = req.body
       const imageFile = req.file


       await serviceModel.findByIdAndUpdate( id, { name, about, available, fee })


       if(imageFile){
           // upload image to cloudinary
           const imageUpload = await cloudinary.uploader.upload(imageFile.path, {resource_type: 'image'})
           const imageURL = imageUpload.secure_url


           await serviceModel.findByIdAndUpdate( id, { image:imageURL })
       }
       res.json({ success:true, message: 'Profile Updated!' })


   } catch(error){
       console.log(error)
       res.json({ success:false, message:error.message })
   }
}


export { serviceList, changeAvailability, getProfile, updateProfile, updateAppointments, appointmentComplete, appointmentCancelled, updateDashboard }