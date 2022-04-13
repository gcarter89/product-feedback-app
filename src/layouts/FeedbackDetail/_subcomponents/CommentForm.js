import styles from './commentform.module.scss';
import { useState, useRef } from 'react';

export default function CommentForm({data, setData, id}) {

    const [characterCount, setCharacterCount] = useState(250);
    const [content, setContent] = useState('');
    const ref = useRef(null);


    function handleSubmit(event, content, data, id) {
        event.preventDefault();
        let commentCount = 0;
        let commentObject = {};
        let index;

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

        ref.current.value = ''
        setCharacterCount(250);
        setContent('');
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
            <textarea ref={ref} onChange={(e) => handleChange(e)} className={styles.commentForm_input} placeholder="Type your comment here" />
            <div className={styles.commentForm_bodyButton}>
                <p className={`_body3 ${styles.commentForm_body}`}>{characterCount} Characters left</p>
                <button onClick={(e) => handleSubmit(e, content, data, id)} className={styles.commentForm_button}><h4>Post Comment</h4></button>
            </div>
        </div>
    )
}