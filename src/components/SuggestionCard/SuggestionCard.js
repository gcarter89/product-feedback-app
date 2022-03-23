import styles from './suggestioncard.module.scss'
import CategoryTab from './_subcomponents/CategoryTab'
import CommentsTab from './_subcomponents/CommentsTab'
import UpvoteTab from './_subcomponents/UpvoteTab'
export default function SuggestionCard() {
    return (
        <div className={styles.suggestionCard}>
            <div>
                <h4 className={styles.suggestionCard_header}>Add tags for solutions</h4>
                <p className={`_body3 ${styles.suggestionCard_bodyText}`}>Easier to search for solutions based on a specific stack.</p>
                <CategoryTab category='Enhancement' />
            </div>
            <div className={styles.suggestionCard_commentsUpvotes}>
                <UpvoteTab />
                <CommentsTab />
            </div>


        </div>
    )
}