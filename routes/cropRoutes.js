const express = require('express');
const { getCrops, addCrop, updateCrop, deleteCrop } = require('../controllers/cropController');
const router = express.Router();

router.get('/', getCrops);
router.post('/', addCrop);
router.put('/:id', updateCrop);
router.delete('/:id', deleteCrop);

module.exports = router;