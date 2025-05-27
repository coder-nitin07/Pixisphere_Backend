const Joi = require('joi');

const partnerOnboardSchema = Joi.object({
    studioName: Joi.string().min(3).max(30).required(),
    city: Joi.string().max(100).required(),
    categories: Joi.array().items(Joi.string()).min(1).required(),
    aadhar: Joi.string().pattern(/^[0-9]{12}$/).required(),
    portfolio: Joi.array().items(Joi.string().uri()).optional()
});

const validatePartnerOnboard = (req, res, next)=>{
    const { error } = partnerOnboardSchema.validate(req.body);

    if(error){
        return res.status(400).json({ message: error.details[0].message });
    }

    next();
};

module.exports = validatePartnerOnboard;