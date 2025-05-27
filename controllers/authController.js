const User = require("../models/authSchema");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Create Signup API
const signup = async (req, res)=>{
    try {
        const { name, email, password, role } = req.body;
        const existingUser = await User.findOne({ email });

        if(existingUser){
            return res.status(400).json({ message: 'User already exist.' })
        }

        const hashPassword = await bcrypt.hash(password, 10);

        const userCount = await User.countDocuments();
        const newUser = new User({ 
            name, 
            email, 
            password: hashPassword, 
            role: userCount === 0 ? 'admin' : role || 'client'
        });

        const token = jwt.sign({ id: newUser._id, role: newUser.role }, process.env.SECRET_KEY, { expiresIn: '1h' });
        
        await newUser.save();
        res.status(201).json({ 
            message: 'User registered successfully', 
            token: token,
            user: {
                id: newUser._id,
                name: newUser.name,
                email: newUser.email,
                role: newUser.role,
                status: newUser.status,
                createdAt: newUser.createdAt
            } 
        });
    } catch (err) {
        return res.status(500).json({ message: 'Something went wrong', error: err.message });
    }
};

// login API
const login = async (req, res)=>{
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if(!user){
            return res.status(401).json({ message: 'Invalid Credentials' });
        }

        const comparePass = await bcrypt.compare(password, user.password);

        if(!comparePass){
            return res.status(404).json({ message: 'Invalid Credentials' });
        }

        const token = jwt.sign({ id: user._id, role: user.role }, process.env.SECRET_KEY, { expiresIn: '1h' });

        res.status(200).json({ 
            message: 'User login successfully', 
            token: token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
                status: user.status
            } 
        })
    } catch (err) {
        res.status(500).json({ message: 'Something went wrong', error: err.message });
    }
};

module.exports = { signup, login };