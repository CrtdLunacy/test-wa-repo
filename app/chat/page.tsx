import styles from '../page.module.scss'
import ChatComponent from "@/components/ChatComponent/ChatComponent";

export default function NextPage() {
    return (
        <main className={styles.main}>
           <ChatComponent />
        </main>
    )
}
