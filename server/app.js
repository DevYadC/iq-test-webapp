const express=require('express');
const cors=require('cors');
const mongoose=require('mongoose');
const ProblemSet=require('./models/ProblemSets');
const Score=require('./models/userScores');
require('dotenv').config({ path: './.env' });
const app=express();




app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error("Could not connect to MongoDB:", err));




app.get('/', (req, res) => {
    res.send('Hello, world!');
});

app.get('/api/problemsets', async (req, res) => {
    try {
        const problemSets=await ProblemSet.find({});
        res.json(problemSets);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.get('/api/problemsets/:id', async (req, res) => {
    const { id }=req.params;

    try {
        const problemSet=await ProblemSet.findById(id);

        if (!problemSet) {
            return res.status(404).json({ message: "Problem set not found" });
        }


        res.json(problemSet);
    } catch (err) {

        res.status(500).json({ message: err.message });
    }
});

app.post('/api/scores', async (req, res) => {
    try {
        const { problemSetId, problemSetName, score, totalQuestions }=req.body;
        const newScore=new Score({ problemSetId, problemSetName, score, totalQuestions });
        await newScore.save();
        res.status(201).send('Score submitted successfully');
    } catch (err) {
        res.status(500).send('Server error');
    }
});

app.get('/api/scores', async (req, res) => {
    try {
        const scores=await Score.find({});
        res.json(scores);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.get('/api/scores/:id', async (req, res) => {
    try {
        const { id }=req.params;
        const scores=await Score.find({ problemSetId: id });
        res.json(scores);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});



const PORT=process.env.PORT||5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
