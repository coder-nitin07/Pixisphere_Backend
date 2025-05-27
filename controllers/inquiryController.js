const Inquiry = require("../models/inquirySchema");

// Create Inquiry API
const createInquiry = async (req, res)=>{
    try {
        const { eventType, eventDate, location, budget, additionalDetails } = req.body;
        
        const inquiry = await Inquiry.create({
            client: req.user.id,
            eventType,
            eventDate,
            location,
            budget,
            additionalDetails
        });

        res.status(201).json({ message: 'Inquiry created successfully', date: inquiry });
    } catch (err) {
        res.status(500).json({ message: 'Something went wrong', error: err.message });
    }
};

module.exports = { createInquiry };