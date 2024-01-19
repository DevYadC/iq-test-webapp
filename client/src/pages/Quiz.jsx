
import { useParams, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import QuizQuestionOptions from '../QuizQuestionOptions';
import styles from '../Quiz.module.css';

import { fetchQuiz, postScore, quizScore } from '../utils/quizUtils';

import Button from '@mui/material/Button';

function Quiz() {

    let { id } = useParams(); // This captures the :id from the URL
    let navigate = useNavigate();

    const [quiz, setQuiz] = useState();//holds quiz data
    const [currQuestion, setCurrQuestion] = useState(0); //holds index of question to be currently displayed
    const [answers, setAnswers] = useState([]); //holds user answers to questions for quiz 
    const [time, setTime] = useState(300); // 300 seconds for 5 minutes



    useEffect(() => {
        // Fetches quiz from database 
        fetchQuiz(id, setQuiz);

        // Timer countdown
        const countdown = setInterval(() => {
            setTime(prevTime => prevTime - 1);
        }, 1000);

        // Clear interval on component unmount
        return () => clearInterval(countdown);
    }, [id]);



    useEffect(() => {
        // Auto-submit when timer reaches 0
        if (time === 1) {
            autoSubmit();
        }
    }, [time]);



    const autoSubmit = async () => {
        console.log(`answers in auto-submission: ${answers}`);

        let newScore = quizScore(quiz.questions, answers);

        console.log(`timer complete, auto submit with score of : ${newScore}`);

        try {
            await postScore(id, quiz.setName, newScore, quiz.questions.length);
            navigate(`/quiz/${id}/result`, { state: { score: newScore, total: quiz.questions.length, name: quiz.setName } });
        } catch (error) {
            console.error('Error auto-submitting score:', error);
            // Handle error (e.g., show a message to the user)
        }
    };

    const submitTest = async () => {
        console.log(`answers in submission: ${answers}`);

        if (answers.length < quiz.questions.length) {
            alert("must complete all questions before submitting.");
            return null;
        }

        let newScore = quizScore(quiz.questions, answers);

        console.log(`quiz submitted with score of: ${newScore}`);

        try {
            await postScore(id, quiz.setName, newScore, quiz.questions.length);
            navigate(`/quiz/${id}/result`, { state: { score: newScore, total: quiz.questions.length, name: quiz.setName } });
        } catch (error) {
            console.error('Error submitting score:', error);
            // Handle error
        }
    };





    const previousQuestion = () => {
        if (currQuestion > 0) {

            setCurrQuestion(currQuestion - 1)
        }
    }

    const nextQuestion = () => {
        if (currQuestion < quiz.questions.length - 1) {

            setCurrQuestion(currQuestion + 1)
        }
    }




    return (
        <div>


            {quiz ? (
                <>

                    <div className={styles.quizContainerParent}>

                        <div className={styles.quizContainer} >
                            <div className={styles.timerContainer}>
                                <div className={styles.questionPage}>{currQuestion + 1}|{quiz.questions.length}</div>
                                <div className={styles.timer}>Time left: {Math.floor(time / 60)}:{('0' + time % 60).slice(-2)}</div>

                            </div>

                            <h3 className={styles.questionTitle}>{quiz.questions[currQuestion].question}</h3>


                            <QuizQuestionOptions
                                options={quiz.questions[currQuestion].options}
                                answers={answers}
                                setAnswers={setAnswers}
                                questionIndex={currQuestion}
                            />

                            <div className={styles.buttonContainer}>
                                <Button className={styles.customButton} onClick={previousQuestion} variant='contained'>previous question</Button>
                                {currQuestion === quiz.questions.length - 1 ? <Button className={styles.submitButton} onClick={submitTest} variant='contained'>Submit Quiz</Button> : null}
                                {currQuestion === quiz.questions.length - 1 ? null : <Button className={styles.customButton} onClick={nextQuestion} variant='contained'>next question</Button>}
                            </div>


                        </div>

                    </div>

                </>
            ) : null
            }




        </div >
    );

}



export default Quiz;
