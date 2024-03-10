const mongoose=require('mongoose');

const scoreSchema=new mongoose.Schema({
    problemSetId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'ProblemSet'
    },
    problemSetName: {
        type: String,
    },
    score: {
        type: Number,
        required: true,
        validate: {
            validator: async function (value) {
                const problemSet=await mongoose.model('ProblemSet').findById(this.problemSetId);
                if (!problemSet) {
                    return false;
                }
                return value>=0&&value<=problemSet.questions.length;
            },
            message: props => `Score (${props.value}) is out of valid range.`
        }
    },

    recordedAt: {
        type: Date,
        default: Date.now
    },
    totalQuestions: {
        type: Number,
        required: true
    },
});

const Score=mongoose.model('Score', scoreSchema);

module.exports=Score;

