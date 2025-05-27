const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const authorizedRoles = require('../middlewares/roleMiddleware');
const { partnerOnboard } = require('../controllers/partnerController');
const validatePartnerOnboard = require('../middlewares/validatePartnerOnboard');
const partnerRouter = express.Router();

partnerRouter.post('/onboard', authMiddleware, authorizedRoles('partner'), validatePartnerOnboard, partnerOnboard);

module.exports = { partnerRouter };