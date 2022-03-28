import styles from './main.module.scss'
import SuggestionCards from "../SuggestionCards/SuggestionCards";
import Dashboard from '../Dashboard/Dashboard';

export default function Main({data, dashboardOpen, selectedCategory, setSelectedCategory}) {
    let featureArray = ['all', 'UI', 'UX', 'enhancement', 'bug', 'feature'];
    featureArray.push(...data.map(elem => { return elem.category }));
    featureArray = [...new Set(featureArray)];


    return (
        <main className={styles.main}>
            {dashboardOpen && <Dashboard featureArray={featureArray} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />}
            <SuggestionCards data={data} dashboardOpen={dashboardOpen} />
        </main>
    )
}