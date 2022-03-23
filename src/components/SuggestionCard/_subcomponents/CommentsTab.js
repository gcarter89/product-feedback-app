import styles from './commentstab.module.scss';
import {ReactComponent as CommentIcon} from '../../../assets/shared/icon-comments.svg';

export default function CommentsTab() {
    return (
        <div className={styles.commentsTab}>
            <CommentIcon />
            <p className={styles.commentsTab_text}>103</p>
        </div>
    )
}