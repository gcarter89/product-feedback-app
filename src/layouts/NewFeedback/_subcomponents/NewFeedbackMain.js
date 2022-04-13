import styles from './newfeedbackmain.module.scss';
import NewFeedbackCard from './NewFeedbackCard.js';

export default function NewFeedbackMain({handleNewFeedbackPost}) {
    return (
        <main className={styles.newFeedbackMain}>
            <NewFeedbackCard handleNewFeedbackPost={handleNewFeedbackPost} />
        </main>
    )
}