import styles from './comment.module.scss';
import ReplyForm from './ReplyForm.js';
import { useState } from 'react';
import Reply from './Reply.js';


export function Comment({comment, userData, border = false}) {
    
    const image = require('../../../assets/user-images/image-suzanne.jpg');

    const [replyVisible, setReplyVisible] = useState(false);
    const [replyUser, setReplyUser] = useState(null);

    function handleClick(event) {
        event.preventDefault();
        setReplyVisible(prevState => !prevState)
    }

    //reply shape:
    //content
    //replyingTo
    //user

    function handleReplyClick(event, content, comment, user) {
        event.preventDefault();
        let replyObject = {};
        replyObject.content = content;
        if (!replyUser) {
            replyObject.replyingTo = comment.user.username;
        } else {
            replyObject.replyingTo = replyUser;
        }
        
        replyObject.user = user;

        if (!comment.replies) {
            return comment.replies = [replyObject]
        }
        return comment.replies.push(replyObject);
    }

    let replyChildren;

    if (comment.replies) {
        replyChildren = comment.replies.map((elem, index) => {
            return (
                <Reply key={index} reply={elem} setReplyUser={setReplyUser} setReplyVisible={setReplyVisible} />
            )
        })
    }

    return (
        <div className={border ? `${styles.comment_commentContainer} ${styles.comment__border}` : styles.comment_commentContainer}>
                <div className={styles.comment_avatarHandleReply}>
                    <div className={styles.comment_avatarHandle}>
                        <img src={image} alt={`avatar of ${comment.user.name}`} />
                        <div className={styles.comment_handle}>
                            <h4>{comment.user.name}</h4>
                            <p className={`_body3`}>@{comment.user.username}</p>
                        </div>
                    </div>
                    <h4 onClick={(e) => handleClick(e)} className={styles.comment_replyButton}>Reply</h4>
                </div>
            <p className={`_body3 ${styles.comment_commentBody}`}>{comment.content}</p>
            {comment.replies ? <div className={styles.comment_repliesContainer}>{replyChildren}</div> : null}
            {replyVisible && <ReplyForm user={userData} comment={comment} handleReplyClick={handleReplyClick} />}
        </div>
    )
}