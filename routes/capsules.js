
const express = require('express');
const router = express.Router();
const { createCapsule, getCapsule } = require('../controllers/capsuleController');
const authMiddleware = require('../middleware/auth');

router.post('/', authMiddleware, createCapsule);
router.get('/:id', authMiddleware, getCapsule);

module.exports = router;
