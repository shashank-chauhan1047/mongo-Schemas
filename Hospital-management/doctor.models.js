import mongoose from "mongoose"

// mini model for number of hours doctors spent in the hospital

const hospitalSchema=new mongoose.Schema({
  name:{
    type:String,
    required:true,
  },
  addressLine1:{
    type:String,
    required:true,
  },
  addressLine2:{
    type:String,
  },
  city:{
    type:String,
    required:true,
  },
  pincode:{
    type:String,  // some internationals have slphabets in their code
    required:true,
  },
  specializedIn:[
    {
      type:String,
    }
  ]

})

const doctorSchema=new mongoose.Schema({
  name:{
    type:String,
    required:true,
  },
  salary:{
    type:String,
    required:true,
  },
  qualification:{
    type:String,
    required:true,
  },
  experienceInYears:{
    type:Number,
    default:0
  },
  worksInHospitals:[
    {
      type:mongoose.Schema.Types.ObjectId,
      ref:"Hospital"
    }
  ],
  

},{timestamps:true})

export const Doctor=mongoose.model("Doctor",doctorSchema);
