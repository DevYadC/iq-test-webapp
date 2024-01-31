const mongoose = require('mongoose');
const ProblemSet = require('../models/ProblemSets');
const problemSets = require('./ProblemSetData'); // The data created in step 2
require('dotenv').config({ path: '../../.env' });

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error("Could not connect to MongoDB:", err));



const seedDB = async () => {
    await ProblemSet.deleteMany({}); // Clear existing data
    await ProblemSet.insertMany(problemSets);
    console.log('Database seeded!');
};

seedDB().then(() => {
    mongoose.connection.close();
});
