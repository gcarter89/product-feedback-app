import styles from './suggestioncard.module.scss';
import CategoryTab from '../CategoryTab/CategoryTab.js';
import CommentsTab from '../CommentsTab/CommentsTab.js';
import UpvoteTab from '../UpvoteTab/UpvoteTab.js'
import {useNavigate} from 'react-router-dom';
export default function SuggestionCard({ data, id, clickable = false }) {

    const navigate = useNavigate();

    function handleCardClick(event) {
        event.preventDefault();
        console.log(id)
        navigate(`/feedback/${id}`);
    }


    return (


        <div className={styles.suggestionCard}>
            <div className={clickable ? styles.suggestionCard__clickable: null} onClick={clickable ? (e) => handleCardClick(e) : null}>
                <h4 className={styles.suggestionCard_title}>{data.title}</h4>
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