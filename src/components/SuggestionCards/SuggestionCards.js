import styles from './suggestioncards.module.scss'
import SuggestionCard from "../SuggestionCard/SuggestionCard.js";

export default function SuggestionCards({ data, dashboardOpen }) {
    if (!data) {
        return (
            <h1>Poop</h1>
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