import express from 'express'
import { serviceList, getProfile, updateProfile, updateAppointments, appointmentComplete, appointmentCancelled, updateDashboard } from '../controllers/serviceController.js'
import authAdmin from '../middlewares/authAdmin.js'
import authUser from '../middlewares/authUser.js'
import upload from '../middlewares/multer.js'


const serviceRouter = express.Router()


serviceRouter.get('/list', serviceList)
serviceRouter.get('/update-appointments', authAdmin, updateAppointments)
serviceRouter.post('/complete-appointment', authAdmin, appointmentComplete)
serviceRouter.post('/cancel-appointment', authAdmin, appointmentCancelled)
serviceRouter.get('/update-dashboard', authAdmin, updateDashboard)
serviceRouter.get('/update-profile/:id', authAdmin, getProfile)
serviceRouter.post('/update-profile/:id',  upload.single('image'), authAdmin, updateProfile)


export default serviceRouter