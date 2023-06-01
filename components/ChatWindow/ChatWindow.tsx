'use client'

import {useEffect, useState} from "react";
import {Message} from "@/components/ChatWindow/types";
import styles from './ChatWindow.module.scss';

interface Storage {
    id: string | null;
    token: string | null;
    phone: string | null
}

const ChatWindow = () => {
    const [messages, setMessages] = useState<Message[]>([])

    const fetchData = ({token, id, phone}: Storage) => {
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
        const token = localStorage.getItem('Token');
        const phone = localStorage.getItem('phone');
        const id = localStorage.getItem('Id');
        fetchData({token, id, phone});
        setInterval(fetchData, 36000);
    }, [fetchData])

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
