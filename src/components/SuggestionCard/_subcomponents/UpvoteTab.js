import styles from './upvotetab.module.scss';
import {ReactComponent as UpvoteIcon} from '../../../assets/shared/icon-arrow-up.svg';


export default function UpvoteTab({count}) {
    return (
        <div className={styles.upvoteTab}>
            <UpvoteIcon />
            <p className={styles.upvoteTab_text}>{count}</p>
        </div>
    )
}