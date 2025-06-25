const express = require('express');
const router = express.Router();
const professoresController = require('../controllers/professoresController');

router.get('/', professoresController.getProfessores);
router.get('/:id', professoresController.getProfessor);
router.post('/', professoresController.insereProfessor);
router.put('/:id', professoresController.updateProfessor);
router.delete('/:id', professoresController.deleteProfessor);

module.exports = router;