import SuggestionCards from "./SuggestionCards";
import Dashboard from "../../../components/Dashboard/Dashboard";
import styles from './suggestionsmain.module.scss';

export default function SuggestionsMain({setSelectedFeedbackDetail, setFeedbackDetailVisible, suggestionData, statusArray, setCardsVisible, setRoadmapVisible, setSelectedCategory, featureArray, selectedCategory, dashboardOpen, setDashboardOpen}) {
    return (
        <main className={styles.suggestionsMain}>
                {dashboardOpen && <Dashboard
                featureArray={featureArray}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                setRoadmapVisible={setRoadmapVisible}
                setCardsVisible={setCardsVisible}
                setDashboardOpen={setDashboardOpen}
                statusArray={statusArray}
                />}
            <SuggestionCards suggestionData={suggestionData} dashboardOpen={dashboardOpen} setFeedbackDetailVisible={setFeedbackDetailVisible} setCardsVisible={setCardsVisible} setSelectedFeedbackDetail={setSelectedFeedbackDetail} />
        </main>
    )
}