import mongoose from "mongoose"


const connectDB = async ()=>{
   mongoose.connection.on('connected', ()=>console.log('Connected to the MongoDB database!'))
   await mongoose.connect(`${process.env.MONGODB_URI}/FriendDB`)
}


export default connectDB