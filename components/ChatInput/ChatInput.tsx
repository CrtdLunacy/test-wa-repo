'use client'

import Input from "@/components/Input/Input";
import React, {useEffect} from "react";
import styles from './ChatInput.module.scss'



const ChatInput = () => {
    const [name, setName] = React.useState('');
    const [id, setId] = React.useState<string | null>('');
    const [phone, setPhone] = React.useState<string | null>('');
    const [token, setToken] = React.useState<string | null>('');
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    }

    const getPosts = async () => {
        fetch(`https://api.green-api.com/waInstance${id}/getChatHistory/${token}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            // mode: "no-cors",
            body: JSON.stringify({
                chatId: `${phone}@c.us`,
                count: 20
            }),
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
            // mode: "no-cors",
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

    useEffect(() => {
        setToken(localStorage.getItem('Token'));
        setId(localStorage.getItem('Id'));
        setPhone(localStorage.getItem('phone'));
    }, [])

    return (
        <div className={styles.chatInput}>
            <Input value={name} onChange={handleChange}/>
            <button onClick={handleSend}>Отправить</button>
        </div>
    );
};

export default ChatInput;
