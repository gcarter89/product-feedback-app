import styles from './roadmap.module.scss';

export default function Roadmap({data, selectedRoadmapStatus}) {
    console.log(data)
    return (
        <div className={styles.roadmap}>
            <div className={styles.roadmap_text}>
                <h3 className={styles.roadmap_heading}>{selectedRoadmapStatus} (3)</h3>
                <p className={`${styles.roadmap_body} _body3`}>Features currently being developed</p>
            </div>
        </div>
    )
}