import styles from './roadmap.module.scss';
import RoadmapCards from '../RoadmapCards/RoadmapCards.js';

export default function Roadmap({selectedRoadmapStatus, roadmapData}) {
    return (
        <div className={styles.roadmap}>
            <div className={styles.roadmap_text}>
                <h3 className={styles.roadmap_heading}>{selectedRoadmapStatus[0]} ({selectedRoadmapStatus[1]})</h3>
                <p className={`${styles.roadmap_body} _body3`}>{selectedRoadmapStatus[2]}</p>
            </div>
            <RoadmapCards roadmapData={roadmapData} />
        </div>

    )
}