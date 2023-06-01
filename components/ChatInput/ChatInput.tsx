'use client'

import Input from "@/components/Input/Input";
import React, {useEffect} from "react";
import styles from './ChatInput.module.scss'
import {Storage} from "@/components/ChatWindow/ChatWindow";



const ChatInput = () => {
    const [name, setName] = React.useState('');
    const storage: Storage = {
        id: '',
        phone: '',
        token: ''
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    }

    const getPosts = async () => {
        fetch(`https://api.green-api.com/waInstance${storage.id}/getChatHistory/${storage.token}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chatId: `${storage.phone}@c.us`,
                count: 20
            }),
            mode: 'no-cors',
        }).then((response) => response.json()).then((data) => {
            console.log(data)
        });
    }

    const postMessage = async () => {
        fetch(`https://api.green-api.com/waInstance${storage.id}/sendMessage/${storage.token}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            mode: 'no-cors',
            body: JSON.stringify({
                chatId: `${storage.phone}@c.us`,
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
        storage.token = localStorage.getItem('Token');
        storage.phone = localStorage.getItem('phone');
        storage.id = localStorage.getItem('Id');
    }, [])

    return (
        <div className={styles.chatInput}>
            <Input value={name} onChange={handleChange}/>
            <button onClick={handleSend}>Отправить</button>
        </div>
    );
};

export default ChatInput;
