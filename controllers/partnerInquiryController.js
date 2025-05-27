const InquiryResponse = require("../models/inquiryResponseSchema");
const Inquiry = require("../models/inquirySchema");

// Get All Inquiries Details
const getAllInquiriesForPartner = async (req, res)=>{
    try {
        const getQueries = await Inquiry.find()
                            .populate('client', 'name email')
                            .sort({ createdAt: -1 });

        res.status(200).json({ message: 'Get All queries', queries: getQueries });
    } catch (err) {
        res.status(500).json({ message: 'Something went wrong', error: err.message });
    }
};

// Response to the query of Client
const responseToInquiry = async(req, res)=>{
    try {
        const { message, proposedPrice, availability } = req.body;
        
        const inquiryId = req.params.id;
        const inquiry = await Inquiry.findById(inquiryId);

        if(!inquiry){
            return res.status(404).json({ message: 'Query not found' });
        }

        const response = await InquiryResponse.create({ 
            inquiryId,
            partnerId: req.user.id,
            message, 
            proposedPrice, 
            availability 
        });

        res.status(201).json({ message: 'Inquiry Response created', response: response });
    } catch (err) {
        res.status(500).json({ message: 'Something went wrong' });
    }
};

module.exports = { getAllInquiriesForPartner, responseToInquiry };