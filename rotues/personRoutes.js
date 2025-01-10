const express = require("express");
const Person = require("../models/Person");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const data = req.body;

    const newPerson = new Person(data);

    const savedPerson = await newPerson.save();
    console.log("data saved");
    res.status(200).json(savedPerson);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "internale server error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const data = await Person.find();
    console.log("data fetch");
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "internale server error" });
  }
});

router.get("/:workType", async (req, res) => {
  try {
    const workType = req.params.workType;
    if (workType == "chef" || workType == "waiter" || workType == "manager") {
      const response = await Person.find({ work: workType });
      console.log("fetch person");
      res.status(200).json(response);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "internale server error" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const personID = req.params.id;
    const updatePErsonId = req.body;

    const response = await Person.findByIdAndUpdate(personID, updatePErsonId, {
      new: true, //run update document
      runValidators: true, // run mongose validated
    });

    if (!response) {
      return res.status(404).json({ error: "person is not found" });
    }

    console.log("update data");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ err: "server internal error" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const personID = req.params.id;
    const response = await Person.findByIdAndDelete(personID);

    if (!response) {
      return res.status(404).json({ error: "person is not found" });
    }
    console.log("data to be deleted");
    res.status(200).json({message:'person deleted sucessfully'});
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "server internal error" });
  }
});

module.exports = router;
