const express = require('express');
const { getPests, addPest, updatePest, deletePest } = require('../controllers/pestController');
const router = express.Router();

router.get('/', getPests);
router.post('/', addPest);
router.put('/:id', updatePest);
router.delete('/:id', deletePest);

module.exports = router;