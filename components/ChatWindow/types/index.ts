export interface Message {
    type: string;
    idMessage: string;
    timestamp: number;
    typeMessage: string;
    chatId: string;
    textMessage: string;
    extendedTextMessage: {
        text: string;
        description: string;
        title: string
        previewType: string
        jpegThumbnail: string;
        forwardingScore: number;
        isForwarded: boolean;
    },
    statusMessage: string;
    sendByApi: boolean;
}

export interface Storage {
    id: string | null;
    token: string | null;
    phone: string | null
}
