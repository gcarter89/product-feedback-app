import SuggestionCards from "./SuggestionCards";
import Dashboard from "./Dashboard.js";
import styles from './suggestionsmain.module.scss';

export default function SuggestionsMain({suggestionData, statusArray, setSelectedCategory, featureArray, selectedCategory, dashboardOpen, setDashboardOpen}) {
    return (
        <main className={styles.suggestionsMain}>
                {dashboardOpen && <Dashboard
                featureArray={featureArray}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                setDashboardOpen={setDashboardOpen}
                statusArray={statusArray}
                />}
            <SuggestionCards suggestionData={suggestionData} dashboardOpen={dashboardOpen} />
        </main>
    )
}