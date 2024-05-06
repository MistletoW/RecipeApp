const express = require('express');
const router = express.Router();
const PantryItem = require('../models/PantryItem');

// Get all pantry items
router.get('/', async (req, res) => {
  try {
    const pantryItems = await PantryItem.find();
    res.json(pantryItems);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Create a new pantry item
router.post('/', async (req, res) => {
  try {
    const newPantryItem = new PantryItem(req.body);
    await newPantryItem.save();
    res.status(201).json(newPantryItem);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Update pantry item by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedPantryItem = await PantryItem.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedPantryItem) {
      return res.status(404).send('Pantry item not found');
    }
    res.json(updatedPantryItem);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Delete pantry item by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedPantryItem = await PantryItem.findByIdAndDelete(req.params.id);
    if (!deletedPantryItem) {
      return res.status(404).send('Pantry item not found');
    }
    res.send('Pantry item deleted');
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
