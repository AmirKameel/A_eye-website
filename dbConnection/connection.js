import mongoose from "mongoose"
//require("dotenv").config()
import dotenv from "dotenv"
dotenv.config()
const url = process.env.MONGO_URL
const connection=async()=>{
await mongoose.connect(url)
.then(()=>{console.log("database connected successfully")})
.catch((err)=>console.log('error in database connection: ',err))
}
export default connection

//require("dotenv").config()
// const url = process.env.MONGO_URL
// //console.log(process.env.MONGO_URL)
// mongoose.connect(url).then(()=>{
//     console.log("connected successfully")
// })
