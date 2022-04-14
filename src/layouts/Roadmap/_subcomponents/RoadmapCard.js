import styles from './roadmapcard.module.scss';
import CategoryTab from '../../../components/CategoryTab/CategoryTab.js';
import CommentsTab from '../../../components/CommentsTab/CommentsTab.js';
import UpvoteTab from '../../../components/UpvoteTab/UpvoteTab.js';
import { useNavigate } from 'react-router-dom';

export default function RoadmapCard({cardData, id})  {
    const navigate = useNavigate()

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
                    <UpvoteTab count={!cardData.upvotes ? 0 : cardData.upvotes} />
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
                    <UpvoteTab count={!cardData.upvotes ? 0 : cardData.upvotes} />
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
                    <UpvoteTab count={!cardData.upvotes ? 0 : cardData.upvotes} />
                    <CommentsTab count={!cardData.comments ? 0 : cardData.comments.length} id={id} />
                </div>
            </div>
        )
    }
}