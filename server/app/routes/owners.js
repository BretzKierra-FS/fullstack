const express = require('express');
const router = express.Router();
const {
  deleteOwner,
  updateOwner,
  createOwner,
  getOwnerById,
  getOwner,
} = require('../controllers/ownersController');

router.get('/', getOwner);

router.post('/', createOwner);

router.get('/:ownerId', getOwnerById);

router.patch('/:ownerId', updateOwner);

router.delete('/:ownerId', deleteOwner);

module.exports = router;
