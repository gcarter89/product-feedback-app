import styles from './commentscard.module.scss';
import { Comment } from './Comment.js';

export default function CommentsCard({commentData, userData}) {


    const children = commentData.map((elem, index) => {
        return (
            (commentData.length === index + 1) ? <Comment key={index} comment={elem} userData={userData} /> : <Comment key={index} comment={elem} userData={userData} border={true} />
        )
    })

    return (
        <div className={styles.commentsCard}>
            <h3 className={styles.commentsCard_commentCount}>{commentData.length} Comments</h3>
            {children}
        </div>
    )
}