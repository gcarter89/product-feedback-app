import styles from './main.module.scss'
import SuggestionCards from "../SuggestionCards/SuggestionCards.js";
import Dashboard from '../Dashboard/Dashboard.js';
import Roadmap from '../Roadmap/Roadmap.js';

export default function Main({data, dashboardOpen, setDashboardOpen, selectedCategory, setSelectedCategory, roadmapVisible, setRoadmapVisible, selectedRoadmapStatus}) {
    let featureArray = ['all', 'UI', 'UX', 'enhancement', 'bug', 'feature'];
    featureArray.push(...data.map(elem => { return elem.category }));
    featureArray = [...new Set(featureArray)];

    

    return (
        <main className={styles.main}>
            {dashboardOpen && <Dashboard
                data={data} 
                featureArray={featureArray}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                setRoadmapVisible={setRoadmapVisible}
                setDashboardOpen={setDashboardOpen}
                 />}
            {!roadmapVisible && <SuggestionCards data={data} dashboardOpen={dashboardOpen} />}
            {roadmapVisible && <Roadmap selectedRoadmapStatus={selectedRoadmapStatus} data={data} />}
        </main>
    )
}