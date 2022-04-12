import SuggestionCard from "../../../components/SuggestionCard/SuggestionCard";
import CommentsCard from "./CommentsCard";
import CommentForm from "./CommentForm";
import styles from './feedbackdetailmain.module.scss';
import { useState } from "react";


export default function FeedbackDetailMain({data, id}) {

    const [dataTest, setDataTest] = useState(data);    
    let selectedIndex;

    dataTest.productRequests.forEach((elem, index) => {
        if (elem.id !== parseInt(id)) {
            return;
        }
        selectedIndex = index;
    });

    return (
        <main className={styles.feedbackDetailMain}>
            <SuggestionCard data={dataTest.productRequests[selectedIndex]} />
            {dataTest.productRequests[selectedIndex].comments && <CommentsCard commentData={dataTest.productRequests[selectedIndex].comments} userData={dataTest.currentUser} />}
            <CommentForm data={dataTest} setData={setDataTest} id={id} />
        </main>
    )
}