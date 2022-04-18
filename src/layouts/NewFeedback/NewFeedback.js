// import styles from './newfeedback.module.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NewFeedbackHeader from './_subcomponents/NewFeedbackHeader.js';
import NewFeedbackMain from './_subcomponents/NewFeedbackMain.js';

export default function NewFeedback({data, setData}) {

    const navigate = useNavigate();
    const [descriptionError, setDescriptionError] = useState(false);
    const [titleError, setTitleError] = useState(false);


    function handleNewFeedbackPost(event, category, description, title) {
        event.preventDefault();

        if ((description === '') && (title === '')) {
            setDescriptionError(true);
            setTitleError(true);
            return;
        }

        if (description === '') {
            setTitleError(false);
            setDescriptionError(true);
            return;
            
        }

        if (title === '') {
            setDescriptionError(false);
            setTitleError(true);
            return;
        }
        setDescriptionError(false);
        setTitleError(false);

        const feedbackObject= {
            id: data.productRequests.length + 1,
            title: title,
            category: category,
            description: description,
            status: "suggestion",
            upvotes: 0
        };

        data.productRequests.push(feedbackObject);
        setData({...data});
        navigate('/');
    }

    return (
        <>
            <NewFeedbackHeader />
            <NewFeedbackMain handleNewFeedbackPost={handleNewFeedbackPost} titleError={titleError} descriptionError={descriptionError} />
        </>

    )
}