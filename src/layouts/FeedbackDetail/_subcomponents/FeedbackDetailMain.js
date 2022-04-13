import SuggestionCard from "../../../components/SuggestionCard/SuggestionCard";
import CommentsCard from "./CommentsCard";
import CommentForm from "./CommentForm";
import styles from './feedbackdetailmain.module.scss';
import { useState } from "react";


export default function FeedbackDetailMain({data, id}) {

    //to-do
    //Make sure that the re-render occurs on submission.
    //Make replies to replies point to the user being replied to, rather than the original poster.

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
            {dataTest.productRequests[selectedIndex].comments && <CommentsCard data={dataTest} setData={setDataTest} selectedIndex={selectedIndex} userData={dataTest.currentUser} />}
            <CommentForm data={dataTest} setData={setDataTest} id={id} />
        </main>
    )
}