// import styles from './newfeedback.module.scss';
import { useNavigate } from 'react-router-dom';
import NewFeedbackHeader from './_subcomponents/NewFeedbackHeader.js';
import NewFeedbackMain from './_subcomponents/NewFeedbackMain.js';

export default function NewFeedback({data}) {

    const navigate = useNavigate();


    function handleNewFeedbackPost(event, category, description, title) {
        event.preventDefault();

        if ((description === '') && (title === '')) {
            return alert('Description and title fields are empty, please try again.');
            
        }

        if (description === '') {
            return alert('Description is empty, please try again');
        }

        if (title === '') {
            return alert('Title is empty, please try again');
        }

        const feedbackObject= {
            category: category,
            description: description,
            id: data.length + 1,
            status: "suggestion",
            title: title,
            upvotes: 0
        };

        data.push(feedbackObject);
        navigate('/');
    }

    return (
        <>
            <NewFeedbackHeader />
            <NewFeedbackMain handleNewFeedbackPost={handleNewFeedbackPost} />
        </>

    )
}