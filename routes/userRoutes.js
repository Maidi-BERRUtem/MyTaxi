const express = require('express');
const router = express.Router();
const User = require('../models/user');

// Sample endpoint
router.get('/', async (req, res) => {
  const users = await user.find();
  res.json(users);
});

module.exports = router;
