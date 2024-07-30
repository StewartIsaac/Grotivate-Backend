const express = require('express');
const { getPests, addPest, updatePest, deletePest } = require('../controllers/pestController');
const { verifyToken, checkSubscription } = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', getPests);
router.post('/', verifyToken, checkSubscription, addPest);
router.put('/:id', verifyToken, checkSubscription, updatePest);
router.delete('/:id', verifyToken, checkSubscription, deletePest);

module.exports = router;