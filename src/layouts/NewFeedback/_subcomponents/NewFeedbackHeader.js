import styles from './newfeedbackheader.module.scss';
import {ReactComponent as LeftArrow} from '../../../assets/shared/icon-arrow-left.svg';
import { useNavigate } from 'react-router-dom';


export default function NewFeedbackHeader() {

    const navigate = useNavigate();

    function handleBackClick(event) {
        event.preventDefault();
        navigate(-1);
    }

    return (
        <header className={styles.header}>
            <button onClick={(e) => handleBackClick(e)} className={styles.header_backButton}>
                <LeftArrow className={styles.header_buttonIcon} />
                <h4>Go Back</h4>
            </button>
    </header>
    )
}