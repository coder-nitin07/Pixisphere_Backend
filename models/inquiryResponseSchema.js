const mongoose = require('mongoose');

const inquiryResponseSchema = new mongoose.Schema({
    inquiryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Inquiry',
        required: true
    },
    partnerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    message: {
        type: String,
        required: true
    },
    proposedPrice: {
        type: Number,
        required: true
    },
    availability: {
        type: String,
        enum: [ 'available', 'not available' ],
        required: true
    }
}, { timestamps: true });

const InquiryResponse = mongoose.model('InquiryResponse', inquiryResponseSchema);

module.exports = InquiryResponse;