const express = require('express');
const connectDB = require('./db');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const paymentRoutes = require('./routes/paymentRoutes');
const weatherRoutes = require('./routes/weatherRoutes');

dotenv.config();

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api/users', userRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api', weatherRoutes);

//Not Found Routes
app.use('*', (req,res)=>{
  res.status(400).json("Request not Found")
})

//Home Routes
app.use('/', (req,res)=>{
  res.status(200).json("Welcome to Gravitate!")
})
// Connect to MongoDB
connectDB();

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});