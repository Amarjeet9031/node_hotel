const express = require("express");
const app = express();
const db = require("./db");

const bodyParser = require("body-parser");
app.use(bodyParser.json());

const Person = require("./models/Person");

app.get("/", function (req, res) {
  res.send("welcome to my hotesl, how i can help you ");
});

app.post("/person", (req, res) => {
  const data = req.body;

  const newPerson = new Person(data);

  newPerson.save((error, savedPerson) => {
    if (error) {
      console.log("Error saving person");
      res.status(500).json({ error: "internal server error" });
    } else {
      console.log("sucessful saved data");
      res.status(200).json(savedPerson);
    }
  });
  // newPerson.name = data.name;
  // newPerson.age = data.age;
  // newPerson.work = data.work;
  // newPerson.email = data.email;
  // newPerson.mobile = data.mobile;
  // newPerson.address = data.address;
});

app.listen(3000, () => {
  console.log("server run on that address 3000");
});
