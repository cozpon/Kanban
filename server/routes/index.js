const express = require('express');
const auth = require('./auth');
const card = require('./card');

const router = express.Router();

router.use('/auth', auth);
router.use('/card', card);

module.exports = router;