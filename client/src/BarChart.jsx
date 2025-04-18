
import { BarChart } from '@mui/x-charts/BarChart';
import styles from './styles/BarChart.module.css';

export default function BasicBars({ scores }) {

    const averageScore=(quizScores) => {
        let totalScore=0;
        let totalQuestions=0;
        for (const quizScore of quizScores) {
            totalScore+=quizScore.score;
            totalQuestions+=quizScore.totalQuestions;
        }
        return (totalScore/totalQuestions)*100;
    };

    const yAxisArray=(quizScores) => {
        let totalQuestions=quizScores[0].totalQuestions+1;
        return [...Array(totalQuestions).keys()].map(index => quizScores.filter(score => score.score===index).length);
    };

    const xAxisArray=(quizScores) => {
        let totalQuestions=quizScores[0].totalQuestions+1;
        return [...Array(totalQuestions).keys()].map(String);
    };

    const yArray=yAxisArray(scores);
    const xArray=xAxisArray(scores);

    return (
        <div className={styles.barChart}>
            <BarChart
                xAxis={[{ scaleType: 'band', data: xArray }]}
                series={[{ data: yArray }]}

                sx={{
                    width: '100%',
                    height: '100%',
                    '& .MuiChartsAxis-line': {
                        stroke: "rgba(255, 255, 255, 0.87)",
                    },
                    '& .MuiChartsAxis-tickLabel': {
                        fill: "rgba(255, 255, 255, 0.87)",
                    },
                    '& .MuiChartsAxis-tick': {
                        stroke: "rgba(255, 255, 255, 0.87)",
                    },
                }}

            />
        </div>
    );
}
