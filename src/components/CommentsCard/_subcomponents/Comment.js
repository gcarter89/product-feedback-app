import styles from './comment.module.scss';
import { useState } from 'react';

export function Comment({comment, border = false}) {
    
    const image = require('../../../assets/user-images/image-suzanne.jpg');

    const [replyVisible, setReplyVisible] = useState(false);
    const [characterCount, setCharacterCount] = useState(250)

    function handleClick(event) {
        event.preventDefault();
        setReplyVisible(prevState => !prevState)
    }

    function handleChange(event, limit = 250) {
        event.preventDefault();
        if (event.target.value.length >= limit) {
            return setCharacterCount(0)
        }
        return setCharacterCount(limit - event.target.value.length);
    }

    return (
        <>
            <div className={border ? `${styles.comment_commentContainer} ${styles.comment__border}` : styles.comment_commentContainer}>
                    <div className={styles.comment_avatarHandleReply}>
                        <div className={styles.comment_avatarHandle}>
                            <img src={image} alt={`avatar of ${comment.user.name}`} />
                            <div className={styles.comment_handle}>
                                <h4>{comment.user.name}</h4>
                                <p className={`_body3`}>@{comment.user.username}</p>
                            </div>
                        </div>
                        <h4 onClick={(e) => handleClick(e)} className={styles.comment_reply}>Reply</h4>
                    </div>
                <p className={`_body3 ${styles.comment_commentBody}`}>{comment.content}</p>
                {replyVisible && <div className={styles.reply}>
                    <textarea onChange={(e) => handleChange(e)} className={styles.reply_input} />
                    <div className={styles.reply_charactersButton}>
                        <p className={`_body3 ${styles.reply_characters}`}>{characterCount} Characters left</p>
                        <button className={styles.reply_button}><h4>Post Reply</h4></button>
                    </div>
                    
                </div>}
            </div>

        </>
    )
}