import styles from './newfeedbackcard.module.scss';
import {ReactComponent as NewFeedbackIcon} from '../../../assets/shared/icon-new-feedback.svg';
import {ReactComponent as DownIcon} from '../../../assets/shared/icon-arrow-down.svg';
import {ReactComponent as CheckIcon} from '../../../assets/shared/icon-check.svg';
import { useState } from 'react';

export default function NewFeedbackCard() {
    const [dropdownVisible, setDropdownVisible] = useState(false);

    //placeholder
    const categoryArray = ['Feature', 'UI', 'UX', 'Enhancement', 'Bug'];

    const [selection, setSelection] = useState(categoryArray[0]);

    function handleDropdownClick(event) {
        event.preventDefault();
        setDropdownVisible(prevState => !prevState);
    }

    function handleSelectionClick(event, value) {
        event.preventDefault();
        setSelection(value);
        setDropdownVisible(false);
    }

    return (
        <div className={styles.newFeedbackCard}>
            <div className={styles.newFeedbackCard_newFeedbackIcon}><NewFeedbackIcon /></div>
            <h3>Create New Feedback</h3>

            <div className={styles.newFeedbackCard_grouping}>
                <div className={styles.newFeedbackCard_headerBody}>
                    <h4>Feedback Title</h4>
                    <p className='_body3'>Add a short, descriptive headline</p>
                </div>
                <textarea className={`${styles.newFeedbackCard_input} ${styles.newFeedbackCard_input__title}`} />
            </div>

            <div className={styles.newFeedbackCard_grouping}>
                <div className={styles.newFeedbackCard_headerBody}>
                    <h4>Category</h4>
                    <p className='_body3'>Choose a category for your feedback</p>
                </div>
                <div onClick={(e) => handleDropdownClick(e)} className={styles.newFeedbackCard_dropdown}>
                    <p className='_body3'>{selection}</p>
                    <DownIcon />
                </div>
                {dropdownVisible && <ul className={styles.newFeedbackCard_dropdownList}>
                    {categoryArray.map((elem, index) => {
                        return (
                            selection === elem ?

                            <li key={index} onClick={(e) => handleSelectionClick(e, elem)} className={styles.newFeedbackCard_dropdownListItem}><p className='_body3'>{elem}</p><CheckIcon /></li>
                            :
                            <li key={index} onClick={(e) => handleSelectionClick(e, elem)} className={styles.newFeedbackCard_dropdownListItem}><p className='_body3'>{elem}</p></li>

                        )
                    })}
                </ul>}
            </div>

            <div className={styles.newFeedbackCard_grouping}>
                <div className={styles.newFeedbackCard_headerBody}>
                    <h4>Feedback Detail</h4>
                    <p className='_body3'>Include any specific comments on what should be improved, added, etc.</p>
                </div>
                <textarea className={`${styles.newFeedbackCard_input} ${styles.newFeedbackCard_input__detail}`} />
            </div>

            <div className={styles.newFeedbackCard_buttonContainer}>
                <button className={`${styles.newFeedbackCard_button} ${styles.newFeedbackCard_button__add}`}><h4>Add Feedback</h4></button>
                <button className={`${styles.newFeedbackCard_button} ${styles.newFeedbackCard_button__cancel}`}><h4>Cancel</h4></button>
            </div>


        </div>
    )
}