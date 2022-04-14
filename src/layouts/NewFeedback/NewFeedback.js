// import styles from './newfeedback.module.scss';
import { useNavigate } from 'react-router-dom';
import NewFeedbackHeader from './_subcomponents/NewFeedbackHeader.js';
import NewFeedbackMain from './_subcomponents/NewFeedbackMain.js';

export default function NewFeedback({data, setData}) {

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
            <NewFeedbackMain handleNewFeedbackPost={handleNewFeedbackPost} />
        </>

    )
}