const mongoose = require('mongoose');

const partnerSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    studioName: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    categories: {
        type: [ String ],
        enum: [ 'wedding', 'event', 'fashion' ],
        required: true
    },
    aadhar: {
        type: String,
        required: true,
        unique: true,
        minlength: 12,
        maxlength: 12,
        validate: {
            validator: function(v){
                return /^\d{12}$/.test(v);
            },

            message: props => `${props.value} is not a aadhar number`
        }
    },
    portfolio: [
        {
            title: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true,
                validate: {
                    validator: function(v){
                        return /^https?:\/\/.+/.test(v);
                    },
                    
                    message: props => `${props.value} is not a valid URL.`
                }
            }
        }
    ],
    status: {
        type: String,
        enum: [ 'pending', 'verified', 'rejected' ],
        default: 'pending'
    }
}, { timestamps: true });

const Partner = mongoose.model('Partner', partnerSchema);

module.exports = Partner;