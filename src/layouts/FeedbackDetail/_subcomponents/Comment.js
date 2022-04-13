import styles from './comment.module.scss';
import ReplyForm from './ReplyForm.js';
import { useState } from 'react';
import Reply from './Reply.js';


export function Comment({comment, commentIndex, data, setData, selectedIndex, border = false}) {
    
    const image = require('../../../assets/user-images/image-suzanne.jpg');

    const [replyVisible, setReplyVisible] = useState(false);
    const [replyUser, setReplyUser] = useState(null);

    function handleClick(event) {
        event.preventDefault();
        setReplyVisible(prevState => !prevState)
        setReplyUser(comment.user.username);
    }

    //reply shape:
    //content
    //replyingTo
    //user

    function handleReplyClick(event, content, data, setter, comment, user, selectedIndex, commentIndex) {
        event.preventDefault();
        let replyObject = {};
        replyObject.content = content;
        if (!replyUser) {
            replyObject.replyingTo = comment.user.username;
        } else {
            replyObject.replyingTo = replyUser;
        }
        
        replyObject.user = user;

        if (!data.productRequests[selectedIndex].comments[commentIndex].replies) {
            data.productRequests[selectedIndex].comments[commentIndex].replies = [replyObject]
            return setter({...data})
        }
        data.productRequests[selectedIndex].comments[commentIndex].replies.push(replyObject);
        setReplyVisible(false);
        return setter({...data})
    }

    let replyChildren;

    if (data.productRequests[selectedIndex].comments[commentIndex].replies) {
        replyChildren = data.productRequests[selectedIndex].comments[commentIndex].replies.map((elem, index) => {
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
            {replyVisible && <ReplyForm data={data} setData={setData} selectedIndex={selectedIndex} comment={comment} commentIndex={commentIndex} handleReplyClick={handleReplyClick} />}
        </div>
    )
}