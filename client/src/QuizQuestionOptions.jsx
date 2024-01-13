import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function QuizQuestionOptions({ options, answers, setAnswers, questionIndex }) {
    const updateAnswers = (e) => {
        const updatedAnswers = [...answers];
        updatedAnswers[questionIndex] = e.target.value;
        setAnswers(updatedAnswers);

    }

    return (
        <FormControl>
            <FormLabel>Options:</FormLabel>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
                value={answers[questionIndex] || ''}
                onChange={updateAnswers}
            >
                {options.map((option, index) => (
                    <FormControlLabel
                        key={index}
                        value={index.toString()}
                        control={<Radio />}
                        label={option}
                    />
                ))}
            </RadioGroup>
        </FormControl>
    );
}
