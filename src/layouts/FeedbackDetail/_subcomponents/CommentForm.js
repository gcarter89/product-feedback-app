import styles from './commentform.module.scss';
import { useState } from 'react';

export default function CommentForm({data, setData, id}) {

    const [characterCount, setCharacterCount] = useState(250);
    const [content, setContent] = useState('');
    const [contentError, setContentError] = useState(false);

    function handleSubmit(event, content, data, id) {
        event.preventDefault();
        let commentCount = 0;
        let commentObject = {};
        let index;

        if (content.length === 0) return setContentError(true);

        commentObject.id = commentCount + 1;
        commentObject.content = content;
        commentObject.user = data.currentUser;

        for (let i = 0; i < data.productRequests.length; i++) {
            if (data.productRequests[i].comments) {
                commentCount += data.productRequests[i].comments.length;
            }

            if (data.productRequests[i].id === parseInt(id)) {
                index = i;
            }
        }

        if (!data.productRequests[index].comments) {
            data.productRequests[index].comments = [commentObject];
            return setData({ ...data});
        }

        data.productRequests[index].comments.push(commentObject);
        setData({ ...data});

        setCharacterCount(250);
        setContent('');
        setContentError(false);
    }


    function handleChange(event, limit = 250) {
        event.preventDefault();
        setContent(event.target.value);

        if (event.target.value.length >= limit) {
            return setCharacterCount(0)
        }
        setCharacterCount(limit - event.target.value.length);

    }



    return (
        <div className={styles.commentForm}>
            <h3 className={styles.commentForm_title}>Add Comment</h3>
            <textarea onChange={(e) => handleChange(e)} className={styles.commentForm_input} value={content.length > 0 ? content : ''} placeholder="Type your comment here" />
            {contentError &&<p className={`_body3 ${styles.commentForm_error}`}>Can't be empty</p>}
            <div className={styles.commentForm_bodyButton}>
                <p className={`_body3 ${styles.commentForm_body}`}>{characterCount} Characters left</p>
                <button onClick={(e) => handleSubmit(e, content, data, id)} className={styles.commentForm_button}><h4>Post Comment</h4></button>
            </div>
        </div>
    )
}