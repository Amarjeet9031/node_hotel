const mongoose=require('mongoose');

const menuItemSchema=new mongoose.Schema({
  name:{
    type:String,
    require:true,
  },
  price:{
    type:Number,
    require:true
  },
  taste:{
    type:String,
    enum:['sweet',"spicy",'sour'],
    require :true
  },
  is_drink:{
    type:Boolean,
    default:false
  },
  ingredients:{
    type:String,
    // enum:["chicken wings","spices","sauce"],
    default:[]
  },
  num_sales:{
    type:Number,
    default:0,
  }

})

const menuItem=mongoose.model('menuItem',menuItemSchema);

module.exports=menuItem;