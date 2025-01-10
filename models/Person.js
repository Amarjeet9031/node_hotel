const mongooes = require("mongoose");

const personSchema = new mongooes.Schema({
  name: {
    type: String,
    require: true,
  },
  age: {
    type: Number,
    require: true,
  },
  work: {
    type: String,
    enum: ["chef", "waiter", "manager"],
    require: true,
  },
  mobile: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique:true,
  },
  address:{
    type:String,
    require:true
  },
  salary:{
    type:Number,
    require:true
  }

});


// create person model

const Person=mongooes.model('Person',personSchema);
module.exports=Person;