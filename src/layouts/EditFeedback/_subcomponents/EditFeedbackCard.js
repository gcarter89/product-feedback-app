import styles from './editfeedbackcard.module.scss';
import {ReactComponent as EditFeedbackIcon} from '../../../assets/shared/icon-edit-feedback.svg';
import EditFeedbackDropdown from './EditFeedbackDropdown.js';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'


export default function EditFeedbackCard({selectedFeedback, data}) {

    //placeholder
    const categoryArray = ['Feature', 'UI', 'UX', 'Enhancement', 'Bug'];
    const statusArray = ['Suggestion', 'Planned', 'In-Progress', 'Live'];

    const feedbackCategoryIndex = categoryArray.findIndex(element => element.toLowerCase() === selectedFeedback.category.toLowerCase());
    const feedbackStatusIndex = statusArray.findIndex(element => element.toLowerCase() === selectedFeedback.status.toLowerCase())


    //these are ok.
    const [category, setCategory] = useState(categoryArray[feedbackCategoryIndex]);
    const [status, setStatus] = useState(statusArray[feedbackStatusIndex]);
    const [title, setTitle] = useState(selectedFeedback.title);
    const [description, setDescription] = useState(selectedFeedback.description);


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

    function handleChange(event, setter) {
        event.preventDefault();
        setter(event.target.value);
    }

    const navigate = useNavigate();


    function handleEdit(event, data, selectedFeedback, title, category, status, description) {
        event.preventDefault();
        let isChanged = false;

        const updateObject = {};

        if (selectedFeedback.title.toLowerCase() !== title.toLowerCase()) {
            isChanged = true;
            updateObject.title = title;
        }

        if (selectedFeedback.category.toLowerCase() !== category.toLowerCase()) {
            isChanged = true;
            updateObject.category = category;
        }

        if (selectedFeedback.status.toLowerCase() !== status.toLowerCase()) {
            isChanged = true;
            updateObject.status = status;
        }

        if (selectedFeedback.description !== description) {
            isChanged = true;
            updateObject.description = description;
        }

        if (!isChanged) {
            console.log('no change')
            return;
        }

        const index = data.indexOf(selectedFeedback);

        if (updateObject.title) {
            data[index].title = updateObject.title;
        }

        if (updateObject.category) {
            data[index].category = updateObject.category;
        }

        if (updateObject.status) {
            data[index].status = updateObject.status;
        }

        if (updateObject.description) {
            data[index].description = updateObject.description;
        }

    }

    function handleDelete(event, data, selectedFeedback) {
        event.preventDefault();
        
        data.forEach((elem, index) => {
            if (elem.id === selectedFeedback.id) {
                data.splice(index, 1);
            }
        })

        navigate('/');
    }

    return (
        <div className={styles.editFeedbackCard}>
            <div className={styles.editFeedbackCard_editFeedbackIcon}><EditFeedbackIcon /></div>
            <h3>Editing '{selectedFeedback.title}'</h3>

            <div className={styles.editFeedbackCard_grouping}>
                <div className={styles.editFeedbackCard_headerBody}>
                    <h4>Feedback Title</h4>
                    <p className='_body3'>Add a short, descriptive headline</p>
                </div>
                <textarea onChange={(e) => handleChange(e, setTitle)} className={`${styles.editFeedbackCard_input} ${styles.editFeedbackCard_input__title}`} defaultValue={selectedFeedback.title} />
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
                <textarea onChange={(e) => handleChange(e, setDescription)} className={`${styles.editFeedbackCard_input} ${styles.editFeedbackCard_input__detail}`} defaultValue={selectedFeedback.description} />
            </div>

            <div className={styles.editFeedbackCard_buttonContainer}>
                <button onClick={(e) => handleEdit(e, data, selectedFeedback, title, category, status, description)} className={`${styles.editFeedbackCard_button} ${styles.editFeedbackCard_button__add}`}><h4>Save Changes</h4></button>
                <button className={`${styles.editFeedbackCard_button} ${styles.editFeedbackCard_button__cancel}`}><h4>Cancel</h4></button>
                <button onClick={(e) => handleDelete(e, data, selectedFeedback)} className={`${styles.editFeedbackCard_button} ${styles.editFeedbackCard_button__delete}`}><h4>Delete</h4></button>
            </div>
        </div>
    )
}