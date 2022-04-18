import styles from './suggestioncard.module.scss';
import CategoryTab from '../CategoryTab/CategoryTab.js';
import CommentsTab from '../CommentsTab/CommentsTab.js';
import UpvoteTab from '../UpvoteTab/UpvoteTab.js'
import {useNavigate} from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function SuggestionCard({ cardData, data, setData, id, clickable = false }) {

    let selectedIndex;
    data.productRequests.forEach((elem, index) => {
        if (elem.id === parseInt(id)) {
            selectedIndex = index;
        }
    });

    const navigate = useNavigate();
    const [upvotes, setUpvotes] = useState(cardData.upvotes ? cardData.upvotes : 0);


    useEffect(() => {
            if (data.productRequests[selectedIndex].upvotes !== upvotes) {
                data.productRequests[selectedIndex].upvotes = upvotes;
                return setData({...data});
            }

    })


    function handleCardClick(event) {
        event.preventDefault();
        navigate(`/feedback/${id}`);
    }


    return (


        <div className={styles.suggestionCard}>
            <div className={clickable ? styles.suggestionCard__clickable: null} onClick={clickable ? (e) => handleCardClick(e) : null}>
                <h4 className={styles.suggestionCard_title}>{cardData.title}</h4>
                <p className={`_body3 ${styles.suggestionCard_bodyText}`}>{cardData.description}</p>
                <CategoryTab category={cardData.category} />
            </div>
            <div className={styles.suggestionCard_commentsUpvotes}>
                <UpvoteTab upvotes={upvotes} setUpvotes={setUpvotes}  />
                <CommentsTab id={id} count={cardData.comments ? cardData.comments.length : 0} />
            </div>


        </div>
    )
}