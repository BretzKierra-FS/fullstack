const express = require('express');
const router = express.Router();
const petRoutes = require('./pets');
const ownerRoutes = require('./owners');

router.use('/pets', petRoutes);
router.use('/owners', ownerRoutes);

module.exports = router;
