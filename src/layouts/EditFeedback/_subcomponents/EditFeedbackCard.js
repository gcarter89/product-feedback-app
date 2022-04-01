import styles from './editfeedbackcard.module.scss';
import {ReactComponent as EditFeedbackIcon} from '../../../assets/shared/icon-edit-feedback.svg';
import EditFeedbackDropdown from './EditFeedbackDropdown.js';
import { useState } from 'react';

export default function EditFeedbackCard() {

    //placeholder
    const categoryArray = ['Feature', 'UI', 'UX', 'Enhancement', 'Bug'];

    const statusArray = ['Suggestion', 'Planned', 'In-Progress', 'Live'];

    const [category, setCategory] = useState(categoryArray[0]);
    const [status, setStatus] = useState(statusArray[0]);

    function handleCategorySelect(event, value, setter) {
        event.preventDefault();
        setCategory(value);
        setter(false);
    }

    function handleStatusSelect(event, value, setter) {
        event.preventDefault();
        setStatus(value);
        setter(false);
    }

    return (
        <div className={styles.editFeedbackCard}>
            <div className={styles.editFeedbackCard_editFeedbackIcon}><EditFeedbackIcon /></div>
            <h3>Create New Feedback</h3>

            <div className={styles.editFeedbackCard_grouping}>
                <div className={styles.editFeedbackCard_headerBody}>
                    <h4>Feedback Title</h4>
                    <p className='_body3'>Add a short, descriptive headline</p>
                </div>
                <textarea className={`${styles.editFeedbackCard_input} ${styles.editFeedbackCard_input__title}`} />
            </div>

            <div className={styles.editFeedbackCard_grouping}>
                <div className={styles.editFeedbackCard_headerBody}>
                    <h4>Category</h4>
                    <p className='_body3'>Choose a category for your feedback</p>
                </div>
                <EditFeedbackDropdown array={categoryArray} selected={category} handleSelect={handleCategorySelect} />
            </div>

            <div className={styles.editFeedbackCard_grouping}>
                <div className={styles.editFeedbackCard_headerBody}>
                    <h4>Update Status</h4>
                    <p className='_body3'>Change feature state</p>
                </div>
                <EditFeedbackDropdown array={statusArray} selected={status} handleSelect={handleStatusSelect} />
            </div>

            <div className={styles.editFeedbackCard_grouping}>
                <div className={styles.editFeedbackCard_headerBody}>
                    <h4>Feedback Detail</h4>
                    <p className='_body3'>Include any specific comments on what should be improved, added, etc.</p>
                </div>
                <textarea className={`${styles.editFeedbackCard_input} ${styles.editFeedbackCard_input__detail}`} />
            </div>

            <div className={styles.editFeedbackCard_buttonContainer}>
                <button className={`${styles.editFeedbackCard_button} ${styles.editFeedbackCard_button__add}`}><h4>Save Changes</h4></button>
                <button className={`${styles.editFeedbackCard_button} ${styles.editFeedbackCard_button__cancel}`}><h4>Cancel</h4></button>
                <button className={`${styles.editFeedbackCard_button} ${styles.editFeedbackCard_button__delete}`}><h4>Delete</h4></button>
            </div>
        </div>
    )
}