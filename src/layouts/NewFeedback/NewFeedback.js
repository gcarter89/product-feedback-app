// import styles from './newfeedback.module.scss';
import NewFeedbackHeader from './_subcomponents/NewFeedbackHeader.js';
import NewFeedbackMain from './_subcomponents/NewFeedbackMain.js';

export default function NewFeedback() {
    function handleBackClick(e) {
        console.log('clicked!')
        return
    }

    return (
        <>
            <NewFeedbackHeader handle={handleBackClick} />
            <NewFeedbackMain />
        </>

    )
}