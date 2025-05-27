const mongoose = require('mongoose');

const portfolioSchema = new mongoose.Schema({
    partnerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    imageURL: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    index: {
        type: Number,
        default: 0
    }
}, { timestamps: true });

const Portfolio = mongoose.model('Portfolio', portfolioSchema);

module.exports = Portfolio;