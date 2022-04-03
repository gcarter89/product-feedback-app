import styles from './main.module.scss'
import SuggestionCards from "../SuggestionCards/SuggestionCards.js";
import Dashboard from '../Dashboard/Dashboard.js';
import Roadmap from '../Roadmap/Roadmap.js';

export default function Main({featureArray, dashboardOpen, setDashboardOpen, selectedCategory, setSelectedCategory, cardsVisible, setCardsVisible, roadmapVisible, setRoadmapVisible, feedbackDetailVisible, setFeedbackDetailVisible, selectedRoadmapStatus, selectedFeedbackDetail, setSelectedFeedbackDetail, roadmapData, suggestionData, statusArray}) {
    //change how navigation works. Currently dependent on true/false. Need a variable that can by polyvalent
    return (
        <main className={styles.main}>
            {dashboardOpen && <Dashboard
                featureArray={featureArray}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                setRoadmapVisible={setRoadmapVisible}
                setCardsVisible={setCardsVisible}
                setDashboardOpen={setDashboardOpen}
                statusArray={statusArray}
                />}
            
            {cardsVisible && <SuggestionCards suggestionData={suggestionData} dashboardOpen={dashboardOpen} setFeedbackDetailVisible={setFeedbackDetailVisible} setCardsVisible={setCardsVisible} setSelectedFeedbackDetail={setSelectedFeedbackDetail} />}
            {roadmapVisible && <Roadmap selectedRoadmapStatus={selectedRoadmapStatus} roadmapData={roadmapData} />}
            
        </main>
    )
}