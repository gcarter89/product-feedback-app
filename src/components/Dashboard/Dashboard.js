import styles from './dashboard.module.scss';
import CategoryButton from '../CategoryButton/CategoryButton.js'

export default function Dashboard({data, featureArray = [], selectedCategory, setSelectedCategory, setRoadmapVisible, setDashboardOpen, statusArray}) {
    

    function handleClick(event) {
        event.preventDefault();
        setRoadmapVisible(true);
        setDashboardOpen(false);
    }

    //to-do: statusArray will update data for roadmap submenu

    return (
        <div className={styles.overlay}>
            <div className={styles.dashboard}>
                <div className={styles.dashboard_categoryCard}>
                    {featureArray.map((elem, index) => {
                        return (
                            selectedCategory === elem ? <CategoryButton key={index} category={elem} selected={true} setSelectedCategory={setSelectedCategory} /> : <CategoryButton key={index} category={elem} setSelectedCategory={setSelectedCategory} />
                        )
                    })}
                </div>
                <div className={styles.dashboard_roadmapCard}>
                    <div className={styles.dashboard_roadmapHeading}>
                        <h3 className={styles.dashboard_roadmapHeading_heading}>Roadmap</h3>
                        <button onClick={(e) => handleClick(e)} className={styles.dashboard_roadmapHeading_link}>View</button>
                    </div>

                    <ul className={styles.dashboard_roadmapList}>
                        <li className={styles.dashboard_roadmapList_item}>
                            <div className={styles.dashboard_roadmapList_grouping}>
                                <div className={styles.dashboard_roadmapList_item__planned}></div>
                                <p className='_body2'>Planned</p>
                            </div>
                            <p className={styles.dashboard_roadmapList_count}>{data.filter(elem => elem.status === 'planned').length}</p>
                        </li>
                        <li className={styles.dashboard_roadmapList_item}>
                            <div className={styles.dashboard_roadmapList_grouping}>
                                <div className={styles.dashboard_roadmapList_item__inprogress}></div>
                                <p className='_body2'>In-Progress</p>
                            </div>
                            <p className={styles.dashboard_roadmapList_count}>{data.filter(elem => elem.status === 'in-progress').length}</p>
                        </li>
                        <li className={styles.dashboard_roadmapList_item}>
                            <div className={styles.dashboard_roadmapList_grouping}>
                                <div className={styles.dashboard_roadmapList_item__live}></div>
                                <p className='_body2'>Live</p>
                            </div>
                            <p className={styles.dashboard_roadmapList_count}>{data.filter(elem => elem.status === 'live').length}</p>
                        </li>
                    </ul>

                </div>
            </div>
        </div>

    )
}