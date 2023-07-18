const mongoose = require("mongoose");
const Product = new mongoose.Schema(
  {
    name: {type:String,required:true},
    price: { type: Number, required: true},
    desc: { type: String, required:true },
    image:{ type: String, reuired:true  },
    restaurant:
      {type:mongoose.Schema.Types.ObjectId, ref:"Restaurant"}
    
  } 
);

module.exports=mongoose.model("Product" ,Product)