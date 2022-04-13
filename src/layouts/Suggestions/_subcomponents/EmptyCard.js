import styles from './emptycard.module.scss';
import {ReactComponent as IllustrationEmpty} from '../../../assets/suggestions/illustration-empty.svg';
import {ReactComponent as PlusIcon} from '../../../assets/shared/icon-plus.svg';
import { useNavigate } from 'react-router-dom';


export default function EmptyCard() {
    const navigate = useNavigate();

    function handleClick(event) {
        event.preventDefault();
        navigate('feedback/new');
    }

    return (
        <div className={styles.emptyCard}>
            <IllustrationEmpty />
            <h3 className={styles.emptyCard_heading}>There is no feedback yet.</h3>
            <p className={`${styles.emptyCard_body} _body3`} >Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to improve our app.</p>
            <button onClick={(e) => handleClick(e)} className={styles.emptyCard_button}>
                <h4><PlusIcon /> Add Feedback</h4>
            </button>
        </div>
    )
}