const express = require('express');
const upload = require('../middlewares/cloudinaryMiddleware');
const { uploadFile } = require('../controllers/fileController');
const authMiddleware = require('../middlewares/authMiddleware');
const authorizedRoles = require('../middlewares/roleMiddleware');
const fileRouter = express.Router();

fileRouter.post('/upload', authMiddleware, authorizedRoles('partner'), upload.single('file'), uploadFile);

module.exports = { fileRouter };