const Partner = require("../models/partnerOnboardingSchema");

// Partner Onboarding API
const partnerOnboard = async (req, res)=>{
    try {
        const { studioName, city, categories, aadhar, portfolio } = req.body;

        const existingPartner = await Partner.findOne({ userId: req.user.id });
        if(existingPartner){
            return res.status(400).json({ message: 'Parnter onboarding alraedy submitted' });
        }

        const onboardingInformation = new Partner({
            userId: req.user.id,
            studioName,
            city,
            categories,
            aadhar,
            portfolio
        });

        await onboardingInformation.save();
        res.status(200).json({ message: 'Information saved successfully', data: onboardingInformation });
    } catch (err) {
        res.status(500).json({ message: 'Something went wrong', error: err.message });
    }
};

module.exports = { partnerOnboard };