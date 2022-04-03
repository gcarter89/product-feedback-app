import styles from './suggestioncards.module.scss'
import SuggestionCard from "../../../components/SuggestionCard/SuggestionCard.js";
import EmptyCard from './EmptyCard.js';

export default function SuggestionCards({ suggestionData, dashboardOpen, setFeedbackDetailVisible, setCardsVisible, setSelectedFeedbackDetail }) {
    if (!suggestionData || suggestionData.length === 0) {
        return (
            <EmptyCard />
        )
    }
    const children = suggestionData.map((elem, index) => {
        return (
            <SuggestionCard key={index} data={elem} clickable={true} setFeedbackDetailVisible={setFeedbackDetailVisible} setCardsVisible={setCardsVisible} setSelectedFeedbackDetail={setSelectedFeedbackDetail} />
        )
    })

    return (
        <div className={dashboardOpen ? styles.suggestionCards__dashboardOpen: null}>
            {children}
        </div>
    )
}