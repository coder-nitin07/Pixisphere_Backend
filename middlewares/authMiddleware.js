const jwt = require('jsonwebtoken');

const authMiddleware = async (req, res, next)=>{
    try {
        const token = req.header('Authorization')?.split(' ')[1];

        if(!token){
            return res.status(401).json({ message: 'Access Denied. No Token Provided.' });
        }

        const decode = jwt.verify(token, process.env.SECRET_KEY);
        req.user = decode;

        next();
    } catch (err) {
        res.status(500).json({ message: 'Something went wrong', error: err.message });
    }
};

module.exports = authMiddleware;