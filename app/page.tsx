import styles from './page.module.scss'
import AuthForm from "@/components/AuthForm/AuthForm";

export default function Home() {
  return (
    <main className={styles.main}>
        <AuthForm />
    </main>
  )
}
