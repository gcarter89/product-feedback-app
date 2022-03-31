import styles from './suggestioncard.module.scss';
import CategoryTab from '../CategoryTab/CategoryTab.js';
import CommentsTab from '../CommentsTab/CommentsTab.js';
import UpvoteTab from '../UpvoteTab/UpvoteTab.js'
export default function SuggestionCard({ data, clickable = false, setFeedbackDetailVisible, setCardsVisible, setSelectedFeedbackDetail }) {

    function handleCardClick(event) {
        event.preventDefault();
        setFeedbackDetailVisible(true);
        setSelectedFeedbackDetail(data);
        setCardsVisible(false);
    }

    return (


        <div className={styles.suggestionCard}>
            <div>
                {clickable ? <h4 onClick={(e) => handleCardClick(e)} className={`${styles.suggestionCard_title} ${styles.suggestionCard__clickable}`}>{data.title}</h4> : <h4 className={styles.suggestionCard_title}>{data.title}</h4>}
                <p className={`_body3 ${styles.suggestionCard_bodyText}`}>{data.description}</p>
                <CategoryTab category={data.category} />
            </div>
            <div className={styles.suggestionCard_commentsUpvotes}>
                <UpvoteTab count={data.upvotes ? data.upvotes : 0}  />
                <CommentsTab count={data.comments ? data.comments.length : 0} />
            </div>


        </div>
    )
}