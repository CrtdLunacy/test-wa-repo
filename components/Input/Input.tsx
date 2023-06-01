'use client'

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import React from "react";
import styles from './Input.module.scss';

interface InputProps {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input(props: InputProps) {
    const { value, onChange } = props;

    return (
        <Box
            component="form"
            sx={{
                '&': { m: 1, width: '100%', borderColor: 'white' },
                '& > :not(style)': { m: 1, width: '100%', border: '1px solid white' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField
                className={styles.input}
                color="secondary"
                id={'defa'}
                label="Your message"
                value={value}
                onChange={onChange}
            />
        </Box>
    );
}
