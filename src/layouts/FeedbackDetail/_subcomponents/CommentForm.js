import styles from './commentform.module.scss';
import { useState } from 'react';

export default function CommentForm({data, id}) {

    const [characterCount, setCharacterCount] = useState(250);
    const [content, setContent] = useState('');

    function handleSubmit(event, content, userData, productData, id) {
        event.preventDefault();

        let commentCount = 0;
        let commentObject = {};
        let index;

        for (let i = 0; i < productData.length; i++) {
            if (productData[i].comments) {
                commentCount += productData[i].comments.length;
            }



            if (productData[i].id === parseInt(id)) {
                index = i;
            }
        }
        commentObject.id = commentCount + 1;
        commentObject.content = content;
        commentObject.user = userData;

        productData[index].comments.push(commentObject);
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
            <textarea onChange={(e) => handleChange(e)} className={styles.commentForm_input} placeholder="Type your comment here" />
            <div className={styles.commentForm_bodyButton}>
                <p className={`_body3 ${styles.commentForm_body}`}>{characterCount} Characters left</p>
                <button onClick={(e) => handleSubmit(e, content, data.currentUser , data.productRequests, id)} className={styles.commentForm_button}><h4>Post Comment</h4></button>
            </div>
        </div>
    )
}