import SuggestionCard from "../../../components/SuggestionCard/SuggestionCard";
import CommentsCard from "./CommentsCard";
import CommentForm from "./CommentForm";
import styles from './feedbackdetailmain.module.scss';


export default function FeedbackDetailMain({data, id}) {

    let selectedFeedbackDetail;

    

    data.productRequests.forEach(elem => {
        if (elem.id !== parseInt(id)) {
            return;
        }
        selectedFeedbackDetail = elem;
    });


    return (
        <main className={styles.feedbackDetailMain}>
            <SuggestionCard data={selectedFeedbackDetail} />
            {selectedFeedbackDetail.comments && <CommentsCard commentData={selectedFeedbackDetail.comments} userData={data.currentUser} />}
            <CommentForm data={data} id={id} />
        </main>
    )
}