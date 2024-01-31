import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

export default function TabsWrappedLabel({ quizzes, setScores }) {

    const [value, setValue] = React.useState('one');



    const fetchScore = async (event, newValue) => {
        try {
            const response = await fetch(`https://iq-test-server-a6004f555e6a.herokuapp.com/${newValue}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setScores(data);
            setValue(newValue)
        } catch (err) {
            console.error("Fetch error:", err);
        }
    };


    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '40px'
        }}>
            <Tabs
                value={value}
                onChange={fetchScore}
                aria-label="wrapped label tabs example"
                sx={{
                    '.MuiTab-root': {
                        color: 'lightgray !important', // Color for unselected tabs
                        fontWeight: 'bold', // Make font bold
                        fontSize: '1rem', // Increase font size
                    },
                    '.Mui-selected': {
                        color: '#9381ff !important', // Bright purple color for the selected tab
                        fontWeight: 'bold',
                    },
                    '.MuiTabs-indicator': {
                        backgroundColor: '#9381ff !important', // Purple color for the indicator (underline)
                    },
                }}
            >
                return <Tab value="" label='All' />
                {quizzes.map((quiz, index) => {
                    return <Tab value={quiz.quizId} label={quiz.quizName} />
                })}

            </Tabs>
        </Box>
    );
}