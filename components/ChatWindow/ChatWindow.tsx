'use client'

import {Message} from "@/components/ChatWindow/types";
import styles from './ChatWindow.module.scss';

interface ChatWindowProps {
    messages: Message[]
}
const ChatWindow = ({messages}: ChatWindowProps) => {

    return (
        <div className={styles.chatWindow}>
            {messages.reverse().map((message, index) => (
                    <div
                        key={index}
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
