import mongoose, { mongo } from "mongoose";

const bookschema = new mongoose.Schema({
  title :{
    type:String,
    required : true,
    unique: true
    
  },
  author :{
    type:String,
    required : true,
    unique: true
  },
  publishYear :{
    type:Number,
    required : true
  }

},{timestamps:true})

export const Book = mongoose.model("Book",bookschema)