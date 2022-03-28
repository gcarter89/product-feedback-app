import styles from './suggestioncards.module.scss'
import SuggestionCard from "../SuggestionCard/SuggestionCard.js";
import EmptyCard from '../EmptyCard/EmptyCard.js';

export default function SuggestionCards({ data, dashboardOpen }) {
    if (!data || data.length === 0) {
        return (
            <EmptyCard />
        )
    }
    const children = data.map((elem, index) => {
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