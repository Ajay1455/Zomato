const mongoose = require("mongoose");
const Restaurant = new mongoose.Schema(
  {
    name: {type:String,required:true},
    city: { type: String, required: true},
    image:{ type: String, required:true },
    products:[{type:mongoose.Schema.Types.ObjectId, ref:"Product"}]
  } 
);

module.exports=mongoose.model("Restaurant" ,Restaurant)