'use client'

import Input from "@/components/Input/Input";
import React from "react";
import styles from './ChatInput.module.scss'

interface ChatInputProps {
    handleSend: (value: string) => void
}

const ChatInput = ({ handleSend }: ChatInputProps) => {
    const [name, setName] = React.useState('');
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    }

    return (
        <div className={styles.chatInput}>
            <Input value={name} onChange={handleChange}/>
            <button onClick={() => console.log(1)}>Отправить</button>
        </div>
    );
};

export default ChatInput;
