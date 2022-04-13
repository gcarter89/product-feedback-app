import FeedbackDetailHeader from './_subcomponents/FeedbackDetailHeader.js';
import FeedbackDetailMain from './_subcomponents/FeedbackDetailMain.js';
import {useParams} from 'react-router-dom';

export default function FeedbackDetail({data}) {
    const {id} = useParams();

    return (
        <>
            <FeedbackDetailHeader id={id} />
            <FeedbackDetailMain id={id} data={data} />
        </>
    )
}