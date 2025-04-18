import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

import styles from '../styles/QuizResult.module.css';

function QuizResult() {

    let { id }=useParams();

    const location=useLocation();
    const { score, total, name }=location.state;

    return (
        <div className={styles.parentContainer}>
            <div className={styles.container}>
                <h2 className={styles.title}>{name} Quiz Complete</h2>
                <p className={styles.scoreParagraph}>Your score: {score}/{total}</p>
                {/* Additional result display */}
            </div>
        </div>
    );
}

export default QuizResult;
