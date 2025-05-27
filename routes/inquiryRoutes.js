const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const authorizedRoles = require('../middlewares/roleMiddleware');
const validateInquiry = require('../middlewares/validateInquiry');
const { createInquiry } = require('../controllers/inquiryController');
const inquiryRouter = express.Router();

inquiryRouter.post('/createInquiry', authMiddleware, authorizedRoles('client'), validateInquiry, createInquiry);

module.exports = { inquiryRouter }