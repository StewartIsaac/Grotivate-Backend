const express = require('express');
const { getCrops, addCrop, updateCrop, deleteCrop } = require('../controllers/cropController');
const { verifyToken, checkSubscription } = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', getCrops);
router.post('/', verifyToken, checkSubscription, addCrop);
router.put('/:id', verifyToken, checkSubscription, updateCrop);
router.delete('/:id', verifyToken, checkSubscription, deleteCrop);

module.exports = router;