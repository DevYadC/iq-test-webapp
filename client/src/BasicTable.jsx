import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';

import styles from './BasicTable.module.css';



export default function BasicTable({ scores }) {


    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', timeZoneName: 'short', hour12: true };
        return new Date(dateString).toLocaleDateString('en-US', options);
    };

    return (



        <TableContainer component={Paper} className={styles.tableContainer}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className={styles.headerCell}>Data ID</TableCell>
                        <TableCell align="right" className={styles.headerCell}>Test Name</TableCell>
                        <TableCell align="right" className={styles.headerCell}>Score</TableCell>
                        <TableCell align="right" className={styles.headerCell}>Recorded At</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {scores.map((score) => (
                        <TableRow
                            key={score._id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row" className={styles.tableCell}>
                                {score._id}
                            </TableCell>
                            <TableCell align="right" className={styles.tableCell}>{score.problemSetName}</TableCell>
                            <TableCell align="right" className={styles.tableCell}>{score.score}/{score.totalQuestions}</TableCell>
                            <TableCell align="right" className={styles.tableCell}>{formatDate(score.recordedAt)}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>

    );
}
