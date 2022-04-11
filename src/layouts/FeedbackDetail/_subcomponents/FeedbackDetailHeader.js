import styles from './feedbackdetailheader.module.scss';
import {ReactComponent as LeftArrow} from '../../../assets/shared/icon-arrow-left.svg';
import { useNavigate } from 'react-router-dom';

export default function FeedbackDetailHeader({id}) {

    const navigate = useNavigate()

    function handleBackClick(event) {
        event.preventDefault();
        navigate('/')
    }

    function handleEditNavigate(event, id) {
        event.preventDefault();
        if (id) {
            return navigate(`edit`)
        }
    }

    return (
        <header className={styles.header}>
            <button onClick={(e) => handleBackClick(e)} className={styles.header_backButton}>
                <LeftArrow className={styles.header_buttonIcon} />
                <h4>Go Back</h4>
            </button>
            <button onClick={(e) => handleEditNavigate(e, id)} className={styles.header_editFeedbackButton}>
                <h4>Edit Feedback</h4>
            </button>
        </header>
    )
}