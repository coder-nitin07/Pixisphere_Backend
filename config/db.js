const mongoose = require('mongoose');

const dbConnection = async ()=>{
    try {
        const connect = await mongoose.connect(process.env.MONGODB_URI);
        
        console.log('Database connected successfully');
    } catch (err) {
        console.log('Error while connecting to the Database', err.message);
    }
};

module.exports = dbConnection;