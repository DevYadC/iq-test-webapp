import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

import styles from './SelectQuiz.module.css';



export default function SelectQuiz() {

    const [problemSets, setProblemSets] = useState();

    useEffect(() => {
        const fetchProblemSets = async () => {
            try {
                const response = await fetch('https://iq-test-server-a6004f555e6a.herokuapp.com/api/problemsets');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();

                setProblemSets(data);
            } catch (err) {
                console.error("Fetch error:", err);
            }
        };

        fetchProblemSets();
    }, []);

    if (!problemSets) {
        return <div className={styles.loadingContainer}><p className={styles.loading}>Loading Quizzes...</p></div>
    }

    return (
        <div className={styles.selectProblemSet}>
            <div className={styles.container}>
                <h1 className={styles.title}>Select Quiz</h1>
                <div className={styles.buttonContainer}>
                    {problemSets.map((problemSet) => (
                        <Link className={styles.customLink} key={problemSet._id} to={`/quiz/${problemSet._id}`} style={{ textDecoration: 'none' }}>
                            <button className={styles.customButton} >
                                {problemSet.setName}
                            </button>
                        </Link>
                    ))}
                </div>
            </div>
        </div >

    );
}
