import validator from "validator"
import bcrypt from 'bcrypt'
import { v2 as cloudinary } from "cloudinary"
import serviceModel from '../models/serviceModel.js'
import jwt from 'jsonwebtoken'
import appointmentModel from "../models/appointmentModel.js"
import userModel from "../models/userModel.js"


// API for adding service
const addService = async (req, res)=>{


   try{


       const { name, email, password, speciality, degree, experience, about, fee, address } = req.body
       const imageFile = req.file


       //checking for all data to add service
       if( !name || !email || !password || !speciality || !degree || !experience || !about || !fee || !address ){
           return res.json({ success: false, message: "Missing db insert details."})
       }
       //validating email format
       if(!validator.isEmail(email)){
           return res.json({ success: false, message: "Please enter a valid email."})
       }
       //validating password
       if(password.length < 6 ){
           return res.json({ success: false, message: "Please enter a valid password of 6 or more characters."})
       }
       //encrypting the password -- hashing
       const salt = await bcrypt.genSalt(10)
       const hashedPassword = await bcrypt.hash(password, salt)


       //upload image to cloudinary
       const imageUpload = await cloudinary.uploader.upload(imageFile.path, { resource_type: "image" })
       const imageUrl = imageUpload.secure_url


       const serviceData = {
           name,
           email,
           image: imageUrl,
           password: hashedPassword,
           speciality,
           degree,
           experience,
           about,
           fee,
           address: JSON.parse(address),
           date: Date.now()
       }


       const newService = new serviceModel(serviceData)
       await newService.save()


       res.json({ success:true, message: 'New service has been added!' })


   }catch(error){
       console.log(error)
       res.json({ success:false, message:error.message })
   }
}


// API for the admin login
const loginAdmin = async (req, res)=>{
   try{
       const { email, password } = req.body
       if( email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD ){
           const token = jwt.sign(email+password, process.env.JWT_SECRET)
           res.json({ success:true, token})
       }else{
           res.json({ success:false, message: 'Invalid Credentials'})
       }
   }catch(error){
       console.log(error)
       res.json({ success:false, message:error.message })
   }
}


// API to get all services list for admin panel
const allServices = async (req, res)=>{
   try{


       const services = await serviceModel.find({}).select('-password')
       res.json({ success:true, services })


   } catch(error){
       console.log(error)
       res.json({ success:false, message:error.message })
   }
}


// API to get all appointments list
const appointmentsAdmin = async (req, res)=>{
   try{


       const appointments = await appointmentModel.find({})
       res.json({ success:true, appointments})


   } catch(error){
       console.log(error)
       res.json({ success:false, message:error.message })
   }
}


// API to allow Admin to cancel an appointment
const appointmentCancel = async (req, res) => {
   try {
       const { appointmentId } = req.body
       const appointmentData = await appointmentModel.findById(appointmentId)


       // Delete the appointment from the database
       await appointmentModel.findByIdAndDelete(appointmentId)


       // Releasing service slot
       const { serviceId, slotDate, slotTime } = appointmentData
       const serviceData = await serviceModel.findById(serviceId)
       let slots_booked = serviceData.slots_booked
       slots_booked[slotDate] = slots_booked[slotDate].filter(e => e !== slotTime)


       await serviceModel.findByIdAndUpdate(serviceId, { slots_booked })
       res.json({ success: true, message: 'Appointment Cancelled and Deleted' })
   } catch (error) {
       console.log(error)
       res.json({ success: false, message: error.message })
   }
}


// API to get dashboard data for admin panel
const adminDashboard = async (req, res) =>{
   try{


       const services = await serviceModel.find({})
       const users = await userModel.find({})
       const appointments = await appointmentModel.find({})


       const dashData = {
           services: services.length,
           appointments: appointments.length,
           clients: users.length,
           latestAppointments: appointments.reverse().slice(0,5)
       }


       res.json({ success:true, dashData })


   } catch(error){
       console.log(error)
       res.json({ success:false, message:error.message })
   }
}


// API to get Other Profile for Other Panel
const otherProfile = async (req, res)=>{
   try{


       const { otherId } = req.body
       const profileData = await otherModel.findById( otherId ).select('-password')


       res.json({ success:true, profileData })


   } catch(error){
       console.log(error)
       res.json({ success:false, message:error.message })
   }
}


// API to update other profile data from other panel
const updateOtherProfile = async (req, res)=>{
   try{


       const { serviceId, fees, address, available } = req.body


       await serviceModel.findByIdAndUpdate( serviceId, { fees, address, available })


       res.json({ success:true, message: 'Profile Updated!' })


   } catch(error){
       console.log(error)
       res.json({ success:false, message:error.message })
   }
}


export { addService, loginAdmin, allServices, appointmentsAdmin, appointmentCancel, adminDashboard, otherProfile, updateOtherProfile }