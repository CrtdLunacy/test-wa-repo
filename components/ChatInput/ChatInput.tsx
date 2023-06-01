'use client'

import Input from "@/components/Input/Input";
import React from "react";
import styles from './ChatInput.module.scss'



const ChatInput = () => {
    const [name, setName] = React.useState('');
    let token: string | null, id: string | null, phone: string | null;
    if(localStorage) {
        token = localStorage.getItem('Token');
        phone = localStorage.getItem('phone');
        id = localStorage.getItem('Id');
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    }

    const getPosts = async () => {
        fetch(`https://api.green-api.com/waInstance${id}/getChatHistory/${token}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chatId: `${phone}@c.us`,
                count: 20
            }),
            next: { revalidate: 60 }
        }).then((response) => response.json()).then((data) => {
            console.log(data)
        });
    }

    const postMessage = async () => {
        fetch(`https://api.green-api.com/waInstance${id}/sendMessage/${token}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chatId: `${phone}@c.us`,
                message: name
            }),
        })
            .then((response) => response.json())
            .then((data) => console.log(data));
        setName('')
    }

    const handleSend =  async () => {
        await postMessage();
        await getPosts();
    }

    return (
        <div className={styles.chatInput}>
            <Input value={name} onChange={handleChange}/>
            <button onClick={handleSend}>Отправить</button>
        </div>
    );
};

export default ChatInput;
