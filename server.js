const express = require("express");
const app = express();
const db = require("./db");

const bodyParser = require("body-parser");
app.use(bodyParser.json());




app.get("/", function (req, res) {
  res.send("welcome to my hotesl, how i can help you ");
});


const personRouters=require('./rotues/personRoutes');
app.use('/person',personRouters);


const  menuRoutes=require('./rotues/menuRoutes');
app.use('/menu',menuRoutes);
app.listen(3000, () => {
  console.log("server run on that address 3000");
});
