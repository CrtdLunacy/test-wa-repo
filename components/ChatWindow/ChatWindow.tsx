'use client'

import {useEffect, useState} from "react";
import {Message} from "@/components/ChatWindow/types";
import styles from './ChatWindow.module.scss';

const ChatWindow = () => {
    const [messages, setMessages] = useState<Message[]>([])
    let token: string | null, id: string | null, phone: string | null;
    if(localStorage) {
        token = localStorage.getItem('Token');
        phone = localStorage.getItem('phone');
        id = localStorage.getItem('Id');
    }

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
