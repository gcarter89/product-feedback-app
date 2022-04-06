import FeedbackDetailHeader from './_subcomponents/FeedbackDetailHeader.js';
import FeedbackDetailMain from './_subcomponents/FeedbackDetailMain.js';
import {useParams} from 'react-router-dom';

export default function FeedbackDetail({data}) {

    const {id} = useParams();
    let selectedFeedbackDetail;
    data.forEach(elem => {
        if (elem.id !== parseInt(id)) {
            return;
        }
        selectedFeedbackDetail = elem;

    });

    console.log(selectedFeedbackDetail);

    return (
        <>
            <FeedbackDetailHeader />
            <FeedbackDetailMain selectedFeedbackDetail={selectedFeedbackDetail} />
        </>
    )
}