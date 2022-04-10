import EditFeedbackHeader from "./_subcomponents/EditFeedbackHeader.js"
import EditFeedbackMain from "./_subcomponents/EditFeedbackMain"
import {useParams, useNavigate} from 'react-router-dom'


export default function EditFeedback({data}) {

    const { id } = useParams();

    let selectedFeedback;
    const navigate = useNavigate()

    data.forEach(elem => {
        if (elem.id !== parseInt(id)) {
            return;
        }
        selectedFeedback = elem;

    });

    function handleBackClick(e) {
        e.preventDefault();
        console.log('clicked!')
        navigate('/');
    }
    return (
        <>
            <EditFeedbackHeader handle={handleBackClick} />
            <EditFeedbackMain selectedFeedback={selectedFeedback} />
        </>
    )
}