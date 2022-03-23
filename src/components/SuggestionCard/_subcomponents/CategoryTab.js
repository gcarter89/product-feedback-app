import capitaliseFirstLetter from '../../../helpers/capitaliseFirstLetter'
import styles from './categorytab.module.scss'

export default function CategoryTab({category}) {
    

    return (
        <div className={styles.categoryTab}>
            <p className={`_body3 ${styles.categoryTab_text}`}>{capitaliseFirstLetter(category)}</p>
        </div>
    )
}