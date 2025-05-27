const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const authorizedRoles = require('../middlewares/roleMiddleware');
const { addPortfolioItem } = require('../controllers/portfolioController');
const portfolioRouter = express.Router();

portfolioRouter.post('/addPortfolio', authMiddleware, authorizedRoles('partner'), addPortfolioItem);

module.exports = { portfolioRouter };