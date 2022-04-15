import styles from './roadmapmain.module.scss';
import RoadmapCards from './RoadmapCards.js';

export default function RoadmapMain({selectedRoadmapStatus, roadmapData, data, setData}) {
    return (
        <main className={styles.roadmapMain}>
            <div className={styles.roadmap}>
                <div className={styles.roadmap_text}>
                    <h3 className={styles.roadmap_heading}>{selectedRoadmapStatus[0]} ({selectedRoadmapStatus[1]})</h3>
                    <p className={`${styles.roadmap_body} _body3`}>{selectedRoadmapStatus[2]}</p>
                </div>
                <RoadmapCards data={data} setData={setData} roadmapData={roadmapData} />
            </div>
        </main>
    )
}