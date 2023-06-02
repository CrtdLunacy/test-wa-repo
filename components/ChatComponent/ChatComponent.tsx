'use client'

import ChatWindow from "@/components/ChatWindow/ChatWindow";
import ChatInput from "@/components/ChatInput/ChatInput";
import React, {useEffect, useState} from "react";
import {Message} from "@/components/ChatWindow/types";
import {fetchData} from "@/components/ChatWindow/api";
import {postMessage} from "@/components/ChatInput/api";

const ChatComponent = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [id, setId] = useState<string | null>('');
    const [phone, setPhone] = useState<string | null>('');
    const [token, setToken] = useState<string | null>('');

    useEffect(() => {
        setToken(localStorage.getItem('Token'));
        setId(localStorage.getItem('Id'));
        setPhone(localStorage.getItem('phone'));
    }, [])

    setInterval(() => {
            fetchData({token, id, phone}, setMessages);
    }, 18000);

    const handleSend =  async (name: string) => {
        await postMessage({
            id, token, phone
        }, name);
        await fetchData({
            id, token, phone
        }, setMessages);
    }

    return (
        <>
            <ChatWindow messages={messages}/>
            <ChatInput handleSend={handleSend}/>
        </>
    );
};

export default ChatComponent;
