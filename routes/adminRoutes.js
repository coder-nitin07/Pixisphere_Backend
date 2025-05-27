const express = require('express');
const { getVerification, verifyPartners } = require('../controllers/adminController');
const authMiddleware = require('../middlewares/authMiddleware');
const authorizedRoles = require('../middlewares/roleMiddleware');
const validateVerifyPartner = require('../middlewares/validateVerifyPartner');
const adminRouter = express.Router();

adminRouter.get('/getRequest', authMiddleware, authorizedRoles('admin'), getVerification);
adminRouter.put('/updatePartner/:id', authMiddleware, authorizedRoles('admin'), validateVerifyPartner, verifyPartners);

module.exports = { adminRouter };