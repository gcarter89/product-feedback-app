import styles from './commentstab.module.scss';
import {ReactComponent as CommentIcon} from '../../assets/shared/icon-comments.svg';

export default function CommentsTab({count}) {
    return (
        <div className={styles.commentsTab}>
            <CommentIcon />
            <p className={styles.commentsTab_text}>{count}</p>
        </div>
    )
}