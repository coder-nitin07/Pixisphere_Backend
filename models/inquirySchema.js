const mongoose = require('mongoose');
const User = require('./authSchema');

const inquirySchema = new mongoose.Schema({
    client: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    eventType: {
        type: String,
        enum: [ 'wedding', 'anniversary', 'birthday', 'corporate', 'baby shower', 'pre-wedding', 'other' ],
        required: true
    },
    eventDate: {
        type: Date,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    budget: {
        type: Number,
        required: true
    },
    additionalDetails: {
        type: String,
        default: ''
    }
}, { timestamps: true });

const Inquiry = mongoose.model('Inquiry', inquirySchema);

module.exports = Inquiry;