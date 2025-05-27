const Joi = require('joi');

const inquirySchema = Joi.object({
    eventType: Joi.string().valid('wedding', 'birthday', 'corporate', 'baby shower', 'pre-weddding', 'other').required(),
    eventDate: Joi.date().min('now').required(),
    location: Joi.string().required(),
    budget: Joi.number().positive().required(),
    additionalDetails: Joi.string().allow('').optional()
});

const validateInquiry = (req, res, next)=>{
    const { error } = inquirySchema.validate(req.body);

    if(error){
        return res.status(400).json({ message: error.details[0].message });
    }

    next();
};

module.exports = validateInquiry;