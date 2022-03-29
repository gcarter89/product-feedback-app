import styles from './suggestioncards.module.scss'
import SuggestionCard from "../SuggestionCard/SuggestionCard.js";
import EmptyCard from '../EmptyCard/EmptyCard.js';

export default function SuggestionCards({ suggestionData, dashboardOpen }) {
    if (!suggestionData || suggestionData.length === 0) {
        return (
            <EmptyCard />
        )
    }
    const children = suggestionData.map((elem, index) => {
        return (
            <SuggestionCard key={index} data={elem} />
        )
    })

    return (
        <div className={dashboardOpen ? styles.suggestionCards__dashboardOpen : undefined}>
            {children}
        </div>
    )
}