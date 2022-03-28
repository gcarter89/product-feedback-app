import capitaliseFirstLetter from '../../helpers/capitaliseFirstLetter.js';
import styles from './categorybutton.module.scss'

export default function CategoryTab({ category, selected = false, setSelectedCategory }) {

    function handleClick(event, cat) {
        event.preventDefault();
        setSelectedCategory(cat);
    }

    return (

        <>
        {selected ?
            <button className={styles.categoryButton__selected}>
                <p className={`_body3 ${styles.categoryButton_text}`}>{capitaliseFirstLetter(category)}</p>
            </button>
            
            : 
        
            <button onClick={(e) => handleClick(e, category)} className={styles.categoryButton}>
                <p className={`_body3 ${styles.categoryButton_text}`}>{capitaliseFirstLetter(category)}</p>
            </button>
        }
        </>


    )
}