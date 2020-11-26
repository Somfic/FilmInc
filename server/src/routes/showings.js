const express = require('express');
const logger = require('../config/logger');

const router = express.Router();

// List
router.get('/', require('../controllers/showings/list.controller'));

// Detail
router.get('/', require('../controllers/showings/detail.controller'));

// Create
router.post('/', require('../controllers/showings/create.controller'));

module.exports = router;