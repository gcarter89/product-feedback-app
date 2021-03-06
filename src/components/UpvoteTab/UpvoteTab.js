import styles from './upvotetab.module.scss';
import {ReactComponent as UpvoteIcon} from '../../assets/shared/icon-arrow-up.svg';
import { useState } from 'react';


export default function UpvoteTab({upvotes, setUpvotes}) {
    const [incrementing, setIncrementing] = useState(true);

    function handlePositiveClick(event) {
        event.preventDefault();
        setUpvotes(prevState => prevState += 1);
        setIncrementing(false);        
    }

    function handleNegativeClick(event) {
        event.preventDefault();
        setUpvotes(prevState => prevState -= 1);
        setIncrementing(true);
    }

    return (
        incrementing ? <button onClick={(e) => handlePositiveClick(e)} className={styles.upvoteTab}>
            <UpvoteIcon />
            <p className={styles.upvoteTab_text}>{upvotes}</p>
        </button> :
        <button onClick={(e) => handleNegativeClick(e)} className={`${styles.upvoteTab} ${styles.upvoteTab__active}`}>
        <UpvoteIcon />
        <p className={styles.upvoteTab_text}>{upvotes}</p>
    </button>
    )
}