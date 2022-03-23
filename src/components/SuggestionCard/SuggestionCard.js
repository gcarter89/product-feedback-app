import styles from './suggestioncard.module.scss'
import CategoryTab from './_subcomponents/CategoryTab'
import CommentsTab from './_subcomponents/CommentsTab'
import UpvoteTab from './_subcomponents/UpvoteTab'
export default function SuggestionCard({ data }) {
    console.log(data);

    return (


        <div className={styles.suggestionCard}>
            <div>
                <h4 className={styles.suggestionCard_header}>{data.title}</h4>
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