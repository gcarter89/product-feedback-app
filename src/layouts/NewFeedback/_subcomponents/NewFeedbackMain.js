import styles from './newfeedbackmain.module.scss';
import NewFeedbackCard from './NewFeedbackCard.js';

export default function NewFeedbackMain({handleNewFeedbackPost, titleError, descriptionError}) {
    return (
        <main className={styles.newFeedbackMain}>
            <NewFeedbackCard handleNewFeedbackPost={handleNewFeedbackPost} titleError={titleError} descriptionError={descriptionError} />
        </main>
    )
}