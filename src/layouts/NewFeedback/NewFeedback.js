// import styles from './newfeedback.module.scss';
import NewFeedbackHeader from './_subcomponents/NewFeedbackHeader.js';
import NewFeedbackMain from './_subcomponents/NewFeedbackMain.js';

export default function NewFeedback({data}) {


    function handleNewFeedbackPost(event, category, description, title) {
        event.preventDefault();
        const feedbackObject= {
            category: category,
            description: description,
            id: data.length + 1,
            status: "suggestion",
            title: title,
            upvotes: 0
        };
        
        data.push(feedbackObject)
    }

    return (
        <>
            <NewFeedbackHeader />
            <NewFeedbackMain handleNewFeedbackPost={handleNewFeedbackPost} />
        </>

    )
}