import styles from './editfeedbackmain.module.scss';
import EditFeedbackCard from "./EditFeedbackCard.js"

export default function EditFeedbackMain({data}) {
    return (
        <main className={styles.editFeedbackMain}>
            <EditFeedbackCard />
        </main>
    )
}