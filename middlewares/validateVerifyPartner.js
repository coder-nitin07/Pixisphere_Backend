const Joi = require('joi');

const verifyPartners = Joi.object({
    status: Joi.string().valid('varified', 'rejected').required(),
    comment: Joi.string().max(200).optional()
});

const validateVerifyPartner = (req, res, next)=>{
    const { error } = verifyPartners.validate(req.body);

    if(error){
        return res.status(400).json({ message: error.details[0].message });
    }

    next();
};

module.exports = validateVerifyPartner;