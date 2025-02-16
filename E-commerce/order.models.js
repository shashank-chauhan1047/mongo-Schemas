import mongoose from "mongoose"

// creating a mini model for the orderItems like 2 laptops, 3 mobiles, 1 earphone etc.

const orderItemSchema=new mongoose.Schema({
  productId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Product"
  },
  quantity:{
    type:Number,
    required:true,
  }

});

const orderSchema=mongoose.Schema({
  orderPrice:{
    type:Number,
    required:true,
  },
  name:{
    type:String,
    required:true,
  },
  customer:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
  },
  orderItems:{
    type:[orderItemSchema],
  },
  address:{
    type:String,
    required:true
  },
  status:{
    type:String,
    enum:["PENDING","CANCELLED","DELIVERED "],   // ennum means the choices
    default:"PENDING",
  }

},{timestamps:true});

export const Order=mongoose.model("Order",orderSchema);
