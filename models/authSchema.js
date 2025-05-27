const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: [ 'client', 'partner', 'admin' ],
        default: 'client'
    },
    status: {
        type: String,
        enum: [ 'pending', 'verified', 'rejected' ],
        default: function(){
            return this.role === 'partner' ? 'pending' : undefined;
        }
    },
    comment:{
        type: String,
        default: ''
    }
}, { timestamps: true });

userSchema.pre('save', function(next){

    if(this.isModified('status') && this.role !== 'partner' ){
        return next(new Error('Only partner can set the status field'));
    };  

    next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;