import SuggestionCard from "../../../components/SuggestionCard/SuggestionCard";
import CommentsCard from "./CommentsCard";
import CommentForm from "./CommentForm";
import styles from './feedbackdetailmain.module.scss';

export default function FeedbackDetailMain({data, setData, id}) {
    let selectedIndex;
    data.productRequests.forEach((elem, index) => {
        if (elem.id !== parseInt(id)) {
            return;
        }
        selectedIndex = index;
    });

    return (
        <main className={styles.feedbackDetailMain}>
            <SuggestionCard cardData={data.productRequests[selectedIndex]} data={data} setData={setData} id={id} />
            {data.productRequests[selectedIndex].comments && <CommentsCard data={data} setData={setData} selectedIndex={selectedIndex} userData={data.currentUser} />}
            <CommentForm data={data} setData={setData} id={id} />
        </main>
    )
}