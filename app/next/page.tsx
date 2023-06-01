import styles from '../page.module.scss'
import PhoneForm from "@/components/PhoneForm/PhoneForm";

export default function NextPage() {
    return (
        <main className={styles.main}>
            <PhoneForm/>
        </main>
    )
}
