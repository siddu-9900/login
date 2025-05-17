const express = require('express');
const router = express.Router();
const Number = require('../models/number');


router.get('/', async (req, res) => {
  try {
    const numbers = await Number.find();
    res.json(numbers);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching items' });
  }
});
// Get a single item
router.get('/:id', async (req, res) => {
  try {
    const number = await Number.findById(req.params.id);
    if (!number) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.json(number);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching item' });
  }
});
// Create a new item
router.post('/', async (req, res) => {
  try {
    const {email,password,mobile  } = req.body;
    const number = new Number({
    email,
    password, 
    mobile, 
    });
    await number.save();
    res.status(201).json(number);
  } catch (error) {
    res.status(400).json({ message: 'Error creating item' });
  }
});

// Update an item
router.put('/:id', async (req, res) => {
  try {
    const { email,password,mobile } = req.body;
    const number = await Number.findByIdAndUpdate(
      req.params.id,
      { email,password,mobile },
      { new: true }
    );
    if (!number) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.json(number);
  } catch (error) {
    res.status(400).json({ message: 'Error updating item' });
  }
});

router.patch('/:id', async (req, res) => {
  try {
    const {email,password,mobile } = req.body;
    const number = await Number.findByIdAndUpdate(
      req.params.id,
      { email,password,mobile },
      { new: true }
    );
    if (!number) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.json(number);
  } catch (error) {
    res.status(400).json({ message: 'Error updating item' });
  }
});

// Delete an item
router.delete('/:id', async (req, res) => {
  try {
    const number = await Number.findByIdAndDelete(req.params.id);
    if (!number) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.json({ message: 'Item deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting item' });
  }
});

module.exports = router;