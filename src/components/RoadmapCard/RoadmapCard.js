import styles from './roadmapcard.module.scss';
import CategoryTab from '../CategoryTab/CategoryTab.js';
import CommentsTab from '../CommentsTab/CommentsTab.js';
import UpvoteTab from '../UpvoteTab/UpvoteTab.js';

export default function RoadmapCard({cardData})  {

    if (cardData.status === 'planned') {
        return (
            <div className={`${styles.roadmapCard} ${styles.__planned}`}>
                <div className={styles.roadmapCard_textGrouping}>
                    <div className={styles.__planned_bullet}></div>
                    <p className='_body3'>Planned</p>
                </div>
                <div>
                    <h4 className={styles.roadmapCard_title}>{cardData.title}</h4>
                    <p className={`_body3 ${styles.roadmapCard_body}`}>{cardData.description}</p>
                    <CategoryTab category={cardData.category} />
                </div>
                <div className={styles.roadmapCard_commentsUpvote}>
                    <CommentsTab count={!cardData.comments ? 0 : cardData.comments.length} />
                    <UpvoteTab count={!cardData.upvotes ? 0 : cardData.upvotes} />
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
                <div>
                    <h4 className={styles.roadmapCard_title}>{cardData.title}</h4>
                    <p className={`_body3 ${styles.roadmapCard_body}`}>{cardData.description}</p>
                    <CategoryTab category={cardData.category} />
                </div>
                <div className={styles.roadmapCard_commentsUpvote}>
                    <UpvoteTab count={!cardData.upvotes ? 0 : cardData.upvotes} />
                    <CommentsTab count={!cardData.comments ? 0 : cardData.comments.length} />
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
                <div>
                    <h4 className={styles.roadmapCard_title}>{cardData.title}</h4>
                    <p className={`_body3 ${styles.roadmapCard_body}`}>{cardData.description}</p>
                    <CategoryTab category={cardData.category} />
                </div>
                <div className={styles.roadmapCard_commentsUpvote}>
                    <CommentsTab count={!cardData.comments ? 0 : cardData.comments.length} />
                    <UpvoteTab count={!cardData.upvotes ? 0 : cardData.upvotes} />
                </div>
            </div>
        )
    }
}