import styles from './main.module.scss'
import SuggestionCards from "../SuggestionCards/SuggestionCards";
import Dashboard from '../Dashboard/Dashboard';

export default function Main({data, dashboardOpen}) {
    return (
        <main className={styles.main}>
            {dashboardOpen && <Dashboard />}
            <SuggestionCards data={data} dashboardOpen={dashboardOpen} />
        </main>
    )
}