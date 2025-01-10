const express = require("express");
const router = express.Router();
const menuItem = require("../models/menuItem");

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newItem = new menuItem(data);
    const itemsaved = await newItem.save();
    console.log("data saved");
    res.status(200).json(itemsaved);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "internale server error" });
  }
});
router.get("/", async (req, res) => {
  try {
    const data = await menuItem.find();
    console.log("data fetch");
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "internale server error" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const menuId = req.params.id;
    const menuUpdate = req.body;

    const response = await menuItem.findByIdAndUpdate(menuId, menuUpdate, {
      new: true,
      runValidators: true,
    });

    if (!response) {
      return res.status(404).json({ error: "not be found" });
    }
    console.log("updated menu");
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "not be updated" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const menuId = req.params.id;
    const response = await menuItem.findByIdAndDelete(menuId);

    if (!response) {
      return res.status(404).json({ error: "menu is not found" });
    }
    console.log("data to be deleted");
    res.status(200).json({message:'menu deleted sucessfully'});
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "server internal error" });
  }
});
module.exports = router;
