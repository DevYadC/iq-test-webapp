import React, { useState, useEffect, useRef } from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import styles from './BarChart.module.css';

export default function BasicBars({ scores }) {
    const [chartWidth, setChartWidth] = useState(500); // Default width
    const containerRef = useRef(null);

    const updateChartWidth = () => {
        const width = window.innerWidth;
        if (width < 600) {
            setChartWidth(300);
        }
        if (width < 800) { // Set your breakpoint here
            setChartWidth(400);
        } else {
            setChartWidth(containerRef.current ? containerRef.current.offsetWidth : 500);
        }
    };

    useEffect(() => {
        window.addEventListener('resize', updateChartWidth);
        updateChartWidth(); // Set initial size

        return () => {
            window.removeEventListener('resize', updateChartWidth);
        };
    }, []);

    const averageScore = (quizScores) => {
        let totalScore = 0;
        let totalQuestions = 0;
        for (const quizScore of quizScores) {
            totalScore += quizScore.score;
            totalQuestions += quizScore.totalQuestions;
        }
        return (totalScore / totalQuestions) * 100;
    };

    const yAxisArray = (quizScores) => {
        let totalQuestions = quizScores[0].totalQuestions + 1;
        return [...Array(totalQuestions).keys()].map(index => quizScores.filter(score => score.score === index).length);
    };

    const xAxisArray = (quizScores) => {
        let totalQuestions = quizScores[0].totalQuestions + 1;
        return [...Array(totalQuestions).keys()].map(String);
    };

    const yArray = yAxisArray(scores);
    const xArray = xAxisArray(scores);

    return (
        <div ref={containerRef} className={styles.barChart}>
            <BarChart
                xAxis={[{ scaleType: 'band', data: xArray }]}
                series={[{ data: yArray }]}
                width={chartWidth}
                height={400}
            />
        </div>
    );
}
