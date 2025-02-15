import mongoose from "mongoose"

const hospitalSchema=new mongoose.Schema({
  hospitalName:{
    type:String,
    required:true,
  },
  location:{
    type:String,
    required:true,
  },
  contactNo: {
    type: String,
    required: true
  },
  capacity: {
    type: Number,
    required: true
  },
  departments: {
    type: [String], 
    default: []
  }
},{timestamps:true})

export const Hospital=mongoose.model("Hospital",hospitalSchema);
