import styles from './upvotetab.module.scss';
import {ReactComponent as UpvoteIcon} from '../../../assets/shared/icon-arrow-up.svg';


export default function UpvoteTab() {
    return (
        <div className={styles.upvoteTab}>
            <UpvoteIcon />
            <p className={styles.upvoteTab_text}>113</p>
        </div>
    )
}