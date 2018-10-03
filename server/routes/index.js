const express = require('express');
const auth = require('./auth');
const cards = require('./cards');
const users = require('./users');

const router = express.Router();

router.use('/auth', auth);
router.use('/cards', cards);
router.use('/users', users);

module.exports = router;