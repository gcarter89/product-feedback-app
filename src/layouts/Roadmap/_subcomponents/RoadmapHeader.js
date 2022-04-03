import styles from './roadmapheader.module.scss';
import {ReactComponent as LeftArrow} from '../../../assets/shared/icon-arrow-left.svg';
import {ReactComponent as PlusIcon} from '../../../assets/shared/icon-plus.svg';
import RoadmapNav from './RoadmapNav.js';

export default function RoadmapHeader({setRoadmapVisible, selectedRoadmapStatus, setSelectedRoadmapStatus, setCardsVisible, statusArray}) {

    function handleBackClick(event) {
        event.preventDefault();
        setRoadmapVisible(false);
        setCardsVisible(true)
    }


    return (
        <>
            <header className={styles.roadmapHeader}>
                <div>
                    <button onClick={(e) => handleBackClick(e)} className={styles.roadmapHeader_backButton}>
                        <LeftArrow className={styles.roadmapHeader_icon} />
                        <h4>Go Back</h4>
                    </button>
                    <h3>Roadmap</h3>
                </div>
                <button className={styles.roadmapHeader_addButton}><h4><PlusIcon /> Add Feedback</h4></button>
            </header>
            <RoadmapNav selectedRoadmapStatus={selectedRoadmapStatus} setSelectedRoadmapStatus={setSelectedRoadmapStatus} statusArray={statusArray}/>
        </>
    )
}