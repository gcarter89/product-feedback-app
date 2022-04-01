import styles from './editfeedbackmain.module.scss';
import EditFeedbackCard from "./EditFeedbackCard.js"

export default function EditFeedbackMain() {
    return (
        <main className={styles.editFeedbackMain}>
            <EditFeedbackCard />
        </main>
    )
}