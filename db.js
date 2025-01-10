const mongoose=require('mongoose');

const mongourl='mongodb://127.0.0.1:27017/hotels';

mongoose.connect(mongourl,{
  useNewUrlParser:true,
  useUnifiedTopology:true
})


const db=mongoose.connection;

db.on('error', (err) => {
  console.log('disconnected to the mongodb server',err);
})

db.on('connected', () => {
  console.log('connected to the mongodb server');
})

module.exports=db;
