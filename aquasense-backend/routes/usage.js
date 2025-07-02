const express = require('express');
const router = express.Router();
const Usage = require('../models/Usage');

// Get usage by user
router.get('/:userId', async (req, res) => {
  try {
    const data = await Usage.find({ userId: req.params.userId });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add usage
router.post('/', async (req, res) => {
  const { userId, date, amount } = req.body;
  try {
    const newEntry = new Usage({ userId, date, amount });
    await newEntry.save();
    res.status(201).json({ message: 'Usage data saved' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
