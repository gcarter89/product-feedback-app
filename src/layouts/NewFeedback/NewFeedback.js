// import styles from './newfeedback.module.scss';
import NewFeedbackHeader from './_subcomponents/NewFeedbackHeader.js';
import NewFeedbackMain from './_subcomponents/NewFeedbackMain.js';

export default function NewFeedback({data}) {


    function handleNewFeedbackPost(event, category, description, title) {

        if ((description === '') && (title === '')) {
            alert('Description and title fields are empty, please try again.');
            return;
        }

        if (description === '') {
            alert('Description is empty, please try again');
            return;
        }

        if (title === '') {
            alert('Title is empty, please try again');
            return;
        }



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