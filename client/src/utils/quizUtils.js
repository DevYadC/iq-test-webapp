

export const fetchQuiz = async (quizId, setQuiz) => {
    try {
        const response = await fetch(`https://iq-test-server-a6004f555e6a.herokuapp.com/api/problemsets/${quizId}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const quizData = await response.json();
        setQuiz(quizData);
    } catch (error) {
        console.error("Fetch error:", error);
        // Handle the error state as needed
    }
};


export const postScore = async (problemSetId, problemSetName, score, totalQuestions) => {
    try {
        const response = await fetch('https://iq-test-server-a6004f555e6a.herokuapp.com/api/scores', { // Adjust the URL as needed
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ problemSetId, problemSetName, score, totalQuestions }),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }

        const data = await response.text();
        console.log(data); // Handle the successful response
    } catch (error) {
        console.error('Error with post request:', error);
    }
};


export const quizScore = (quizQuestions, userAnswers) => {
    let score = 0;

    quizQuestions.forEach((question, index) => {
        // Assuming the 'answers' array stores the index of the selected option
        // And 'question.answer' is the index of the correct answer
        if (parseInt(userAnswers[index]) === question.answer) {
            score += 1;
        }
    });

    return score;

}
