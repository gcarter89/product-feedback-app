import styles from './commentscard.module.scss';

export default function CommentsCard({data}) {
    const image = require('../../assets/user-images/image-suzanne.jpg');
    console.log(data)



    // const dataImage = require(dataImagePath);

    // const children = data.map((elem, index) => {
    //     return (
            
    //     )
    // })

    return (
        <div className={styles.commentsCard}>
            <h3 className={styles.commentsCard_commentCount}>{data.length} Comments</h3>
            <div className={styles.commentsCard_commentContainer}>
                <div className={styles.commentsCard_avatarHandleReply}>
                    <div className={styles.commentsCard_avatarHandle}>
                        <img src={image} alt={`avatar of ${data[0].user.name}`} />
                        <div className={styles.commentsCard_handle}>
                            <h4>{data[0].user.name}</h4>
                            <p className={`_body3`}>@{data[0].user.username}</p>
                        </div>
                    </div>
                    <h4 className={styles.commentsCard_reply}>Reply</h4>
                </div>
                <p className={`_body3 ${styles.commentsCard_commentBody}`}>{data[0].content}</p>
            </div>
        </div>
    )
}