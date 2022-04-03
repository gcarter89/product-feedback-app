import SuggestionCard from "../../../components/SuggestionCard/SuggestionCard";
import CommentsCard from "./CommentsCard";
import CommentForm from "./CommentForm";
import styles from './feedbackdetailmain.module.scss';


export default function FeedbackDetailMain({selectedFeedbackDetail}) {
    console.log()
    return (
        <main className={styles.feedbackDetailMain}>
            <SuggestionCard data={selectedFeedbackDetail} />
            {selectedFeedbackDetail.comments && <CommentsCard data={selectedFeedbackDetail.comments} />}
            <CommentForm />
        </main>
    )
}