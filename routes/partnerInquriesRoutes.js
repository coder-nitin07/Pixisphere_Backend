const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const authorizedRoles = require('../middlewares/roleMiddleware');
const { getAllInquiriesForPartner, responseToInquiry } = require('../controllers/partnerInquiryController');
const inquiriesRouter = express.Router();

inquiriesRouter.get('/getAllQueries', authMiddleware, authorizedRoles('partner'), getAllInquiriesForPartner);
inquiriesRouter.post('/responseToInquiry/:id', authMiddleware, authorizedRoles('partner'), responseToInquiry);

module.exports = { inquiriesRouter };