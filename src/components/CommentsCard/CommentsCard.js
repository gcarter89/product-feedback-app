import styles from './commentscard.module.scss';
import { Comment } from './_subcomponents/Comment.js';

export default function CommentsCard({data}) {
    console.log(data)

    const children = data.map((elem, index) => {
        return (
            (data.length === index + 1) ? <Comment key={index} comment={elem} /> : <Comment key={index} comment={elem} border={true} />
        )
    })

    return (
        <div className={styles.commentsCard}>
            <h3 className={styles.commentsCard_commentCount}>{data.length} Comments</h3>
            {children}
        </div>
    )
}