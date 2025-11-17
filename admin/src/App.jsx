import React, { useContext } from 'react'
import Login from './pages/Login'
import { ToastContainer, toast } from 'react-toastify'
import { AdminContext } from './context/AdminContext'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Admin/Dashboard'
import AllAppointments from './pages/Admin/AllAppointments'
import AddService from './pages/Admin/AddService'
import ServicesList from './pages/Admin/ServicesList'
// import { ServiceContext } from './context/ServiceContext'
import UpdateDashboard from './pages/Updates/UpdateDashboard'
import UpdateAppointments from './pages/Updates/UpdateAppointments'
import UpdateProfile from './pages/Updates/UpdateProfile'






const App = () => {


 const { aToken } = useContext(AdminContext)
 // const { oToken } = useContext(ServiceContext)


 return aToken ? (
   <div className='bg-[#F8F9FD]'>
     <ToastContainer />
     <Navbar />
     <div className='flex item-start'>
     <Sidebar />
     <Routes>
       {/* Admin Routes */}
       <Route path='/' element={<></>} />
       <Route path='/admin-dashboard' element={<Dashboard />} />
       <Route path='/all-appointments' element={<AllAppointments />} />
       <Route path='/add-service' element={<AddService />} />
       <Route path='/services-list' element={<ServicesList />} />
       {/* Update Routes */}
       <Route path='/update-dashboard' element={<UpdateDashboard />} />
       <Route path='/update-appointments' element={<UpdateAppointments />} />
       <Route path='/update-profile/:id' element={<UpdateProfile />} />
     </Routes>
     </div>
   </div>
 )
 :
 (
   <>
     <Login />
     <ToastContainer />
   </>
 )
}


export default App