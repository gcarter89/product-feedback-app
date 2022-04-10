import styles from './feedbackdetailheader.module.scss';
import {ReactComponent as LeftArrow} from '../../../assets/shared/icon-arrow-left.svg';
import { useNavigate } from 'react-router-dom';

export default function FeedbackDetailHeader() {

    const navigate = useNavigate()

    function handle(event) {
        event.preventDefault();
        navigate('/')
    }

    return (
        <header className={styles.header}>
            <button onClick={(e) => handle(e)} className={styles.header_backButton}>
                <LeftArrow className={styles.header_buttonIcon} />
                <h4>Go Back</h4>
            </button>
            <button className={styles.header_editFeedbackButton}>
                <h4>Edit Feedback</h4>
            </button>
        </header>
    )
}