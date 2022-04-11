import styles from './editfeedbackmain.module.scss';
import EditFeedbackCard from "./EditFeedbackCard.js"

export default function EditFeedbackMain({selectedFeedback}) {
    return (
        <main className={styles.editFeedbackMain}>
            <EditFeedbackCard selectedFeedback={selectedFeedback} />
        </main>
    )
}