import styles from '../page.module.scss'
import ChatInput from "@/components/ChatInput/ChatInput";
import ChatWindow from "@/components/ChatWindow/ChatWindow";

export default function NextPage() {
    return (
        <main className={styles.main}>
            <ChatWindow/>
            <ChatInput/>
        </main>
    )
}
