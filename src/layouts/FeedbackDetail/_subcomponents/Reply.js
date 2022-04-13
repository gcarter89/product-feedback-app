import styles from './reply.module.scss';

export default function Reply({reply, setReplyUser, setReplyVisible}) {
    

    const image = require('../../../assets/user-images/image-suzanne.jpg');

    function handleClick(event) {
        event.preventDefault();
        setReplyVisible(prevState => !prevState);
        console.log(reply.user.username);
        setReplyUser(reply.user.username);
    }

    return (
        <div className={styles.reply}>
            <div className={styles.reply_replyContainer}>
                <div className={styles.reply_avatarHandleReply}>
                    <div className={styles.reply_avatarHandle}>
                        <img src={image} alt={`avatar of ${reply.user.name}`} />
                        <div className={styles.reply_handle}>
                            <h4>{reply.user.name}</h4>
                            <p className={`_body3`}>@{reply.user.username}</p>
                        </div>
                    </div>
                        <h4 onClick={(e) => handleClick(e)} className={styles.reply_replyButton}>Reply</h4>
                    </div>
                <p className={`_body3 ${styles.reply_replyBody}`}>{<><span className={styles.reply_replyingTo}>@{reply.replyingTo}</span> {reply.content}</>}</p>
            </div>
        </div>
    )
}