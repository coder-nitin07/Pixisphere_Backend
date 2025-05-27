const express = require('express');
const { signup, login } = require('../controllers/authController');
const validateSignUp = require('../middlewares/validateUser');
const authRouter = express.Router();

authRouter.post('/signup', validateSignUp, signup);
authRouter.post('/login', login);

module.exports = { authRouter };