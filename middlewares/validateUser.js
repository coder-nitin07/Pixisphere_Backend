const Joi = require('joi');

const signUpValidation = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().min(6).required(),
    role: Joi.string().valid('client', 'partner', 'admin').default('client')
});

const validateSignUp = (req, res, next)=>{
    const { error } = signUpValidation.validate(req.body);

    if(error){
        return res.status(400).json({ message: error.details[0].message });
    };

    next();
};

module.exports = validateSignUp;