import styles from './commentstab.module.scss';
import {ReactComponent as CommentIcon} from '../../assets/shared/icon-comments.svg';
import { useNavigate } from 'react-router-dom';

export default function CommentsTab({count, id}) {

    const navigate = useNavigate();

    function handleClick(event) {
        event.preventDefault();
        navigate(`/feedback/${id}`);
    }

    return (
        <button onClick={(e) => handleClick(e)} className={styles.commentsTab}>
            <CommentIcon />
            <p className={styles.commentsTab_text}>{count}</p>
        </button>
    )
}