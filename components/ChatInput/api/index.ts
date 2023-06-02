import {Storage} from "@/components/ChatWindow/types";

export const postMessage = async (localData: Storage, name: string) => {
    fetch(`https://api.green-api.com/waInstance${localData.id}/sendMessage/${localData.token}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        // mode: "no-cors",
        body: JSON.stringify({
            chatId: `${localData.phone}@c.us`,
            message: name
        }),
    }).catch(e => console.log(e));
}
