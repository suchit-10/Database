import express from 'express';
import mongoose from 'mongoose';

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB Atlas
mongoose.connect('mongodb+srv://Suchit1:SuchitA@clustorone.nc8kx.mongodb.net/Airbnb')

const airbnbSchema = new mongoose.Schema({
    name: String,
    summary: String,
    bedrooms: Number,
    price: Number,
});

// Create Mongoose Model (explicitly specify collection name)
const AirbnbListing = mongoose.model('AirbnbListing', airbnbSchema, 'ListAirbnb');

// API Endpoint to Retrieve Listings
app.get('/api/airbnb', async (req, res) => {
    try {
        const listings = await AirbnbListing.find();
        // console.log("Listings retrieved from MongoDB:", listings);
        res.json(listings);
    } catch (error) {
        // console.error("Error fetching listings:", error);
        res.status(500).send(error.message);
    }
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
