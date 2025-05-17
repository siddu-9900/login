const express = require('express');
const router = express.Router();
const Drink = require('../models/drink');


router.get('/', async (req, res) => {
  try {
    const drinks = await Drink.find();
    res.json(drinks);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching items' });
  }
});
// Get a single item
router.get('/:id', async (req, res) => {
  try {
    const drink = await Drink.findById(req.params.id);
    if (!drink) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.json(drink);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching item' });
  }
});
// Create a new item
router.post('/', async (req, res) => {
  try {
    const {drink_name,product_id, description,product_price,  product_category  } = req.body;
    const drink = new Drink({
      drink_name,
      product_id,
       description,
       product_price, 
        product_category 
    });
    await drink.save();
    res.status(201).json(drink);
  } catch (error) {
    res.status(400).json({ message: 'Error creating item' });
  }
});

// Update an item
router.put('/:id', async (req, res) => {
  try {
    const { drink_name,product_id, description,product_price,  product_category  } = req.body;
    const drink = await Drink.findByIdAndUpdate(
      req.params.id,
      { drink_name,product_id, description,product_price,  product_category  },
      { new: true }
    );
    if (!drink) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.json(drink);
  } catch (error) {
    res.status(400).json({ message: 'Error updating item' });
  }
});

router.patch('/:id', async (req, res) => {
  try {
    const { drink_name,product_id, description,product_price,  product_category  } = req.body;
    const drink = await Drink.findByIdAndUpdate(
      req.params.id,
      { drink_name,product_id, description,product_price,  product_category  },
      { new: true }
    );
    if (!drink) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.json(drink);
  } catch (error) {
    res.status(400).json({ message: 'Error updating item' });
  }
});

// Delete an item
router.delete('/:id', async (req, res) => {
  try {
    const drink = await Drink.findByIdAndDelete(req.params.id);
    if (!drink) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.json({ message: 'Item deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting item' });
  }
});

module.exports = router;