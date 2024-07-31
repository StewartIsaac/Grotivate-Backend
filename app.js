const express = require('express');
const connectDB = require('./db');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const paymentRoutes = require('./routes/paymentRoutes');
const weatherRoutes = require('./routes/weatherRoutes');
const cropRoutes = require('./routes/cropRoutes');
const pestRoutes = require('./routes/pestRoutes');
const livestockRoutes = require('./routes/livestockRoutes');
const path = require('path'); // this is for serving static files  - remove this after cybersecurity testing

dotenv.config();

// Serve static files - remove this after cybersecurity testing
app.use(express.static(path.join(__dirname, 'public')));

// Serve the index.html file - remove this after cybersecurity testing
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api/users', userRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api', weatherRoutes);
app.use('/api/crops', cropRoutes);
app.use('/api/pests', pestRoutes);
app.use('/api/livestock', livestockRoutes);

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