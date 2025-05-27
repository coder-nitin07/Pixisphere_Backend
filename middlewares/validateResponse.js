const Joi = require('joi');

const responseSchema = Joi.object({
    message: Joi.string().max(200).required(),
    proposedPrice: Joi.number().required(),
    availability: Joi.string().valid('available', 'not available').required()
});

const validateResponse = (req, res, next)=>{
    const { error } = responseSchema.validate(req.body);

    if(error){
        return res.status(400).json({ messsage: error.details[0].message });
    }

    next();
};

module.exports = validateResponse;