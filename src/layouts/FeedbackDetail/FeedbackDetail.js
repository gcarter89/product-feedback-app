import FeedbackDetailHeader from './_subcomponents/FeedbackDetailHeader.js';
import FeedbackDetailMain from './_subcomponents/FeedbackDetailMain.js';

export default function FeedbackDetail({selectedFeedbackDetail}) {
    return (
        <>
            <FeedbackDetailHeader />
            <FeedbackDetailMain selectedFeedbackDetail={selectedFeedbackDetail} />
        </>
    )
}