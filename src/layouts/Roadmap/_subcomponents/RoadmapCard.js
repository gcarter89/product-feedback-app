import styles from './roadmapcard.module.scss';
import CategoryTab from '../../../components/CategoryTab/CategoryTab.js';
import CommentsTab from '../../../components/CommentsTab/CommentsTab.js';
import UpvoteTab from '../../../components/UpvoteTab/UpvoteTab.js';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function RoadmapCard({data, setData, cardData, id})  {

    let selectedIndex;
    data.productRequests.forEach((elem, index) => {
        if (elem.id === parseInt(id)) {
            selectedIndex = index;
        }
    });

    const navigate = useNavigate();
    const [upvotes, setUpvotes] = useState(data.productRequests[selectedIndex].upvotes ? data.productRequests[selectedIndex].upvotes : 0);

    useEffect(() => {
        if (data.productRequests[selectedIndex].upvotes !== upvotes) {
            data.productRequests[selectedIndex].upvotes = upvotes;
            return setData({...data});
        }
})


    function handleClick(event, id) {
        event.preventDefault();
        navigate(`/feedback/${id}`);
    }
    if (cardData.status === 'planned') {
        return (
            <div className={`${styles.roadmapCard} ${styles.__planned}`}>
                <div className={styles.roadmapCard_textGrouping}>
                    <div className={styles.__planned_bullet}></div>
                    <p className='_body3'>Planned</p>
                </div>
                <div className={styles.roadmapCard_headerGrouping} onClick={(e) => handleClick(e, id)}>
                    <h4 className={styles.roadmapCard_title}>{cardData.title}</h4>
                    <p className={`_body3 ${styles.roadmapCard_body}`}>{cardData.description}</p>
                    <CategoryTab category={cardData.category} />
                </div>
                <div className={styles.roadmapCard_commentsUpvote}>
                    <UpvoteTab upvotes={upvotes ? upvotes : 0} setUpvotes={setUpvotes} />
                    <CommentsTab count={!cardData.comments ? 0 : cardData.comments.length} id={id} />
                </div>
            </div>
        )
    }

    if (cardData.status === 'in-progress') {
        return (
            <div className={`${styles.roadmapCard} ${styles.__inprogress}`}>
                <div className={styles.roadmapCard_textGrouping}>
                    <div className={styles.__inprogress_bullet}></div>
                    <p className='_body3'>In Progress</p>
                </div>
                <div className={styles.roadmapCard_headerGrouping} onClick={(e) => handleClick(e, id)}>
                    <h4 className={styles.roadmapCard_title}>{cardData.title}</h4>
                    <p className={`_body3 ${styles.roadmapCard_body}`}>{cardData.description}</p>
                    <CategoryTab category={cardData.category} />
                </div>
                <div className={styles.roadmapCard_commentsUpvote}>
                    <UpvoteTab upvotes={upvotes ? upvotes : 0} setUpvotes={setUpvotes} />
                    <CommentsTab count={!cardData.comments ? 0 : cardData.comments.length} id={id} />
                </div>
            </div>
        )
    }

    if (cardData.status === 'live') {
        return (
            <div className={`${styles.roadmapCard} ${styles.__live}`}>
                <div className={styles.roadmapCard_textGrouping}>
                    <div className={styles.__live_bullet}></div>
                    <p className='_body3'>Live</p>
                </div>
                <div className={styles.roadmapCard_headerGrouping} onClick={(e) => handleClick(e, id)}>
                    <h4 className={styles.roadmapCard_title}>{cardData.title}</h4>
                    <p className={`_body3 ${styles.roadmapCard_body}`}>{cardData.description}</p>
                    <CategoryTab category={cardData.category} />
                </div>
                <div className={styles.roadmapCard_commentsUpvote}>
                    <UpvoteTab upvotes={upvotes ? upvotes : 0} setUpvotes={setUpvotes} />
                    <CommentsTab count={!cardData.comments ? 0 : cardData.comments.length} id={id} />
                </div>
            </div>
        )
    }
}