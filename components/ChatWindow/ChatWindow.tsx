'use client'

import {useEffect, useState} from "react";
import {Message} from "@/components/ChatWindow/types";
import styles from './ChatWindow.module.scss';

const ChatWindow = () => {
    const [messages, setMessages] = useState<Message[]>([])
    const token = localStorage.getItem('Token');
    const phone = localStorage.getItem('phone');
    const id = localStorage.getItem('Id');

    const fetchData = () => {
        fetch(`https://api.green-api.com/waInstance${id}/getChatHistory/${token}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chatId: `${phone}@c.us`,
                count: 20
            }),
        }).then((response) => response.json()).then((data) => {
            setMessages(data)
            console.log(data);
        });
    }

    useEffect(() => {
        fetchData();
        setInterval(fetchData, 36000);
    }, [])

    return (
        <div className={styles.chatWindow}>
            {messages.reverse().map(message => (
                    <div
                        key={message.idMessage}
                        className={
                            message.type === 'outgoing'
                            ?
                            styles.rightMessage
                            :
                            styles.leftMessage
                        }
                    >
                        {message.textMessage}
                    </div>
                )
            )}
        </div>
    );
};

export default ChatWindow;
