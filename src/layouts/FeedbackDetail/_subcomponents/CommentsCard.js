import styles from './commentscard.module.scss';
import { Comment } from './Comment.js';

export default function CommentsCard({data, setData, selectedIndex, userData}) {

    const children = data.productRequests[selectedIndex].comments.map((elem, index) => {
        return (
            (data.productRequests[selectedIndex].comments.length === index + 1) ? <Comment key={index} commentIndex={index} comment={elem} userData={userData} selectedIndex={selectedIndex} data={data} setData={setData} /> : <Comment key={index} comment={elem} userData={userData} selectedIndex={selectedIndex} commentIndex={index} data={data} setData={setData} border={true} />
        )
    })

    return (
        <div className={styles.commentsCard}>
            <h3 className={styles.commentsCard_commentCount}>{data.productRequests[selectedIndex].comments.length} Comments</h3>
            {children}
        </div>
    )
}