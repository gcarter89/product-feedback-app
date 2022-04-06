import EditFeedbackHeader from "./_subcomponents/EditFeedbackHeader.js"
import EditFeedbackMain from "./_subcomponents/EditFeedbackMain"
import {useParams} from 'react-router-dom'


export default function EditFeedback({data}) {

    const { id } = useParams();

    let selectedFeedback;

    data.forEach(elem => {
        if (elem.id !== parseInt(id)) {
            return;
        }
        selectedFeedback = elem;

    });

    console.log(selectedFeedback)

    function handleBackClick(e) {
        console.log('clicked!')
        return
    }
    return (
        <>
            <EditFeedbackHeader handle={handleBackClick} />
            <EditFeedbackMain selectedFeedback={selectedFeedback} />
        </>
    )
}