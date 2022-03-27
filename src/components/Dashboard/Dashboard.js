import styles from './dashboard.module.scss';
import CategoryTab from '../CategoryTab/CategoryTab.js'

export default function Dashboard() {
    return (
        <div className={styles.overlay}>
            <div className={styles.dashboard}>
                <div className={styles.dashboard_categoryCard}>
                    <CategoryTab category='All' />
                    <CategoryTab category='UI' />
                    <CategoryTab category='UX' />
                    <CategoryTab category='Enhancement' />
                    <CategoryTab category='Bug' />
                    <CategoryTab category='Feature' />
                </div>
                <div className={styles.dashboard_roadmapCard}>
                    <div className={styles.dashboard_roadmapHeading}>
                        <h3 className={styles.dashboard_roadmapHeading_heading}>Roadmap</h3>
                        <p className={styles.dashboard_roadmapHeading_link}>View</p>
                    </div>

                    <ul className={styles.dashboard_roadmapList}>
                        <li className={styles.dashboard_roadmapList_item}>
                            <div className={styles.dashboard_roadmapList_grouping}>
                                <div className={styles.dashboard_roadmapList_item__planned}></div>
                                <p className='_body2'>Planned</p>
                            </div>
                            <p className={styles.dashboard_roadmapList_count}>2</p>
                        </li>
                        <li className={styles.dashboard_roadmapList_item}>
                            <div className={styles.dashboard_roadmapList_grouping}>
                                <div className={styles.dashboard_roadmapList_item__inprogress}></div>
                                <p className='_body2'>In-Progress</p>
                            </div>
                            <p className={styles.dashboard_roadmapList_count}>3</p>
                        </li>
                        <li className={styles.dashboard_roadmapList_item}>
                            <div className={styles.dashboard_roadmapList_grouping}>
                                <div className={styles.dashboard_roadmapList_item__live}></div>
                                <p className='_body2'>Live</p>
                            </div>
                            <p className={styles.dashboard_roadmapList_count}>1</p>
                        </li>
                    </ul>

                </div>
            </div>
        </div>

    )
}