import styles from './newfeedbackmain.module.scss';
import NewFeedbackCard from './NewFeedbackCard.js';

export default function NewFeedbackMain() {
    return (
        <main className={styles.newFeedbackMain}>
            <NewFeedbackCard />
        </main>
    )
}