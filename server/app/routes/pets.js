const express = require('express');
const router = express.Router();
const {
  deletePet,
  updatePet,
  createPet,
  getPetById,
  getPet,
} = require('../controllers/petController');

router.get('/', getPet);

router.post('/', createPet)

router.get('/:petId', getPetById);

router.patch('/:petId', updatePet)

router.delete('/:petId', deletePet);

module.exports = router;
