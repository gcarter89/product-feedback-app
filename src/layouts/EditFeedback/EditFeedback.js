import EditFeedbackHeader from "./_subcomponents/EditFeedbackHeader.js"
import EditFeedbackMain from "./_subcomponents/EditFeedbackMain"
import {useParams} from 'react-router-dom'


export default function EditFeedback({data, setData}) {

    const { id } = useParams();

    let selectedFeedback;

    data.productRequests.forEach(elem => {
        if (elem.id !== parseInt(id)) {
            return;
        }
        selectedFeedback = elem;
    });



    return (
        <>
            <EditFeedbackHeader />
            <EditFeedbackMain selectedFeedback={selectedFeedback} data={data} setData={setData} />
        </>
    )
}