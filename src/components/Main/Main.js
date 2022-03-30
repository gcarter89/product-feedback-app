import styles from './main.module.scss'
import SuggestionCards from "../SuggestionCards/SuggestionCards.js";
import Dashboard from '../Dashboard/Dashboard.js';
import Roadmap from '../Roadmap/Roadmap.js';

export default function Main({data, dashboardOpen, setDashboardOpen, selectedCategory, setSelectedCategory, roadmapVisible, setRoadmapVisible, selectedRoadmapStatus, roadmapData, suggestionData, statusArray}) {
    let featureArray = ['all', 'UI', 'UX', 'enhancement', 'bug', 'feature'];
    featureArray.push(...data.map(elem => { return elem.category }));
    featureArray = [...new Set(featureArray)];

    

    return (
        <main className={styles.main}>
            {dashboardOpen && <Dashboard
                featureArray={featureArray}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                setRoadmapVisible={setRoadmapVisible}
                setDashboardOpen={setDashboardOpen}
                statusArray={statusArray}
                 />}
            {!roadmapVisible && <SuggestionCards suggestionData={suggestionData} dashboardOpen={dashboardOpen} />}
            {roadmapVisible && <Roadmap selectedRoadmapStatus={selectedRoadmapStatus} roadmapData={roadmapData} />}
        </main>
    )
}