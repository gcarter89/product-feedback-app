import CommentsCard from "../CommentsCard/CommentsCard.js"
import SuggestionCard from "../SuggestionCard/SuggestionCard.js"

export default function FeedbackDetail({selectedFeedbackDetail}) {
    return (
        <>
        <SuggestionCard data={selectedFeedbackDetail} />
        {selectedFeedbackDetail.comments ? <CommentsCard data={selectedFeedbackDetail.comments} /> : null}
        </>
    )
}