const express = require('express');
const { getLivestock, addLivestock, updateLivestock, deleteLivestock } = require('../controllers/livestockController');
const router = express.Router();

router.get('/', getLivestock);
router.post('/', addLivestock);
router.put('/:id', updateLivestock);
router.delete('/:id', deleteLivestock);

module.exports = router;