const express = require('express');
const dbConnect = require('./config/db');
const { authRouter } = require('./routes/authRoutes');
const { fileRouter } = require('./routes/fileRoutes');
const { partnerRouter } = require('./routes/partnerRoutes');
const { adminRouter } = require('./routes/adminRoutes');
const { inquiryRouter } = require('./routes/inquiryRoutes');
const { inquiriesRouter } = require('./routes/partnerInquriesRoutes');
const { portfolioRouter } = require('./routes/portfolioRoutes');
const app = express();
require('dotenv').config();

// parse JSON data
app.use(express.json());

// DB Connection
dbConnect();

// routes
app.use('/auth', authRouter);
app.use('/file', fileRouter);
app.use('/partner', partnerRouter);
app.use('/admin', adminRouter);
app.use('/client/inquiry', inquiryRouter);
app.use('/partner/inquiry', inquiriesRouter);
app.use('/portfolio', portfolioRouter);

app.get('/', (req, res)=>{
    res.send('This is my Pixisphere AI-Powered Photography Project.')
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log(`Server is running on PORT ${ PORT }`);
});