import styles from './feedbackdetail.module.scss';
import FeedbackDetailHeader from './_subcomponents/FeedbackDetailHeader.js';
import FeedbackDetailMain from './_subcomponents/FeedbackDetailMain.js';

export default function FeedbackDetail() {
    return (
        <>
            <FeedbackDetailHeader />
            <FeedbackDetailMain />
        </>
    )
}