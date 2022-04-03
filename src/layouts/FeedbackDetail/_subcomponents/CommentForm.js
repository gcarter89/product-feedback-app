import styles from './commentform.module.scss';
import { useState } from 'react';

export default function CommentForm() {

    const [characterCount, setCharacterCount] = useState(250)



    function handleChange(event, limit = 250) {
        event.preventDefault();
        if (event.target.value.length >= limit) {
            return setCharacterCount(0)
        }
        return setCharacterCount(limit - event.target.value.length);
    }



    return (
        <div className={styles.commentForm}>
            <h3 className={styles.commentForm_title}>Add Comment</h3>
            <textarea onChange={(e) => handleChange(e)} className={styles.commentForm_input} placeholder="Type your comment here" />
            <div className={styles.commentForm_bodyButton}>
                <p className={`_body3 ${styles.commentForm_body}`}>{characterCount} Characters left</p>
                <button className={styles.commentForm_button}><h4>Post Comment</h4></button>
            </div>
        </div>
    )
}