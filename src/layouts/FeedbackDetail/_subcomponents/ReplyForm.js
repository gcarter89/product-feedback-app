import styles from './replyform.module.scss';
import { useState } from 'react';

export default function ReplyForm({handleReplyClick, comment, user}) {

    const [characterCount, setCharacterCount] = useState(250);
    const [reply, setReply] = useState('')





    function handleChange(event, limit = 250) {
        event.preventDefault();
        setReply(event.target.value);
        if (event.target.value.length >= limit) {
            return setCharacterCount(0)
        }
        return setCharacterCount(limit - event.target.value.length);
    }


    return (
        <div className={styles.replyForm}>
            <textarea onChange={(e) => handleChange(e)} className={styles.replyForm_input} placeholder="Type your reply here" />
            <div className={styles.replyForm_charactersButton}>
                <p className={`_body3 ${styles.replyForm_characters}`}>{characterCount} Characters left</p>
                <button onClick={(e) => handleReplyClick(e, reply, comment, user)} className={styles.replyForm_button}><h4>Post Reply</h4></button>
            </div>
        </div>
    )
}