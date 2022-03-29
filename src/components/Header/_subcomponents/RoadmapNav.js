import styles from './roadmapnav.module.scss';

export default function RoadmapNav({selectedRoadmapStatus, setSelectedRoadmapStatus}) {

    const statusArray =[['Planned', 2], ['In-Progress', 3], ['Live', 1]];

    function handleStatusClick(event, status) {
        event.preventDefault();
        setSelectedRoadmapStatus(status);
        console.log(status);
    }

    return (
        <nav className={styles.nav}>
            <ul className={styles.nav_list}>
                {statusArray.map((elem, index) => {
                    return (
                        elem[0] === selectedRoadmapStatus ? <li key={index} className={styles.nav_item__selected}><h4 className={styles.nav_heading__selected}>{elem[0]} ({elem[1]})</h4></li> : <li onClick={(e) => handleStatusClick(e, elem[0])} key={index} className={styles.nav_item}><h4 className={styles.nav_heading}>{elem[0]} ({elem[1]})</h4></li>
                    )
                })}


                {/* <li className={styles.nav_item}><h4 className={styles.nav_heading}>Planned (2)</h4></li>
                <li className={styles.nav_item__selected}><h4 className={styles.nav_heading__selected}>In-Progress (3)</h4></li>
                <li className={styles.nav_item}><h4 className={styles.nav_heading}>Live (1)</h4></li> */}
            </ul>
        </nav>
    )
}