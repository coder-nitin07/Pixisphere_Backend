const User = require("../models/authSchema");

// Get Pending Verifications
const getVerification = async (req, res)=>{
    try {
        const users = await User.find({
            role: 'partner',
            status: 'pending'
        }).select('-password');

        res.json({ user: users });
    } catch (err) {
        res.status(500).json({ message: 'Something went wrong' });
    }
};

//  PUT /api/admin/verify/:id → Approve/Reject partner with status + comment

// Verify the Partners
const verifyPartners = async (req, res)=>{
    try {
        const id = req.params.id;
        const { status, comment } = req.body;

        const verifyPartner = await User.findById(id);
        if(!verifyPartner){
            return res.status(403).json({ message: 'Partner not found' });
        }
        
        verifyPartner.status = status;
        if(comment){
            verifyPartner.comment = comment;
        }

        await verifyPartner.save();
        res.status(200).json({ message: 'Update Parnter Successfaully',  partner: verifyPartner })
    } catch (err) {
        res.status(500).json({ message: 'Something went wrong', error: err.message });
    }
};

module.exports = { getVerification, verifyPartners };