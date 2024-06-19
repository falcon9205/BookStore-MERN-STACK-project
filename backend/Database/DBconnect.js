import mongoose from "mongoose";
import { URI } from "../config.js";
// import express from "express"
import dotenv from "dotenv"
dotenv.config({
    path:'./env'
})
const connectdb = async()=>{
   try{
    const connnectioninstance  = await mongoose.connect(URI)
     console.log(`MongoDB connected !! DB Host : ${connnectioninstance.connection.host}`);
    
   }
   catch(error){
    console.log("Error occured ",error);
    process.exit(1);
   }
}
export default connectdb;