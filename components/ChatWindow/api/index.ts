import {Message, Storage} from "@/components/ChatWindow/types";

export const fetchData = (localData: Storage, setMessage: (value: Message[]) => void) => {
    fetch(`https://api.green-api.com/waInstance${localData.id}/getChatHistory/${localData.token}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            chatId: `${localData.phone}@c.us`,
            count: 20
        }),
    }).then((response) => response.json()).then((data) => {
        setMessage(data)
        console.log(data)
    });
}
