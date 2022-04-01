import EditFeedbackHeader from "./_subcomponents/EditFeedbackHeader.js"
import EditFeedbackMain from "./_subcomponents/EditFeedbackMain"
export default function EditFeedback() {
    function handleBackClick(e) {
        console.log('clicked!')
        return
    }
    return (
        <>
            <EditFeedbackHeader handle={handleBackClick} />
            <EditFeedbackMain />
        </>
    )
}