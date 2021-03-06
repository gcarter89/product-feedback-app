import styles from './roadmapnav.module.scss';

export default function RoadmapNav({selectedRoadmapStatus, setSelectedRoadmapStatus, statusArray}) {

    function handleStatusClick(event, statusName) {
        event.preventDefault();
        statusArray.forEach(elem => {
            if (statusName === elem[0]) {
                setSelectedRoadmapStatus(elem);

            }
        })

    }

    return (
        <nav className={styles.nav}>
            <ul className={styles.nav_list}>
                {statusArray.map((elem, index) => {
                    return (
                        elem[0] === selectedRoadmapStatus[0] ? <li key={index} className={styles.nav_item__selected}><h4 className={styles.nav_heading__selected}>{elem[0]} ({elem[1]})</h4></li> : <li onClick={(e) => handleStatusClick(e, elem[0])} key={index} className={styles.nav_item}><h4 className={styles.nav_heading}>{elem[0]} ({elem[1]})</h4></li>
                    )
                })}


                {/* <li className={styles.nav_item}><h4 className={styles.nav_heading}>Planned (2)</h4></li>
                <li className={styles.nav_item__selected}><h4 className={styles.nav_heading__selected}>In-Progress (3)</h4></li>
                <li className={styles.nav_item}><h4 className={styles.nav_heading}>Live (1)</h4></li> */}
            </ul>
        </nav>
    )
}