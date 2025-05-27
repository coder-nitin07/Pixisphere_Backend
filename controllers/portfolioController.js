// Implement these main functions:
//     addPortfolioItem — create a new portfolio entry.
//     getPortfolioItems — get all portfolio items for the logged-in partner.
//     updatePortfolioItem — update description or index.
//     deletePortfolioItem — delete a portfolio item by ID.

const Portfolio = require("../models/portfolioSchema");

// Create Partner Portfolio
const addPortfolioItem = async (req, res)=>{
    try {
        const { imageURL, description, index } = req.body;

        const partnerId = req.user.id;

        const newPortfolio = await Portfolio.create({
            partnerId,
            imageURL,
            description,
            index
        });

        res.status(201).json({ message: 'Portfolio created successfully', portfolio: newPortfolio });
    } catch (err) {
        res.status(500).json({ message: 'Something went wrong', error: err.msssage });
    }
};

module.exports = { addPortfolioItem };