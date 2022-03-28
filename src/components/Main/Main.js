import styles from './main.module.scss'
import SuggestionCards from "../SuggestionCards/SuggestionCards";
import Dashboard from '../Dashboard/Dashboard';

export default function Main({data, dashboardOpen, setDashboardOpen, selectedCategory, setSelectedCategory, roadmapVisible, setRoadmapVisible}) {
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
            {roadmapVisible && <h1>this worked</h1>}
        </main>
    )
}