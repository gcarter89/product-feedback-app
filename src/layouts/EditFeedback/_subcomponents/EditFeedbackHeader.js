import styles from './editfeedbackheader.module.scss';
import {ReactComponent as LeftArrow} from '../../../assets/shared/icon-arrow-left.svg';


export default function EditFeedbackHeader({handle}) {
    //may create general component for this as it's the same as addFeedback header.
    return (
        <header className={styles.header}>
            <button onClick={(e) => handle(e)} className={styles.header_backButton}>
                <LeftArrow className={styles.header_buttonIcon} />
                <h4>Go Back</h4>
            </button>
        </header>
    )
}