import styles from './roadmapheader.module.scss';
import {ReactComponent as LeftArrow} from '../../../assets/shared/icon-arrow-left.svg';
import {ReactComponent as PlusIcon} from '../../../assets/shared/icon-plus.svg';
import RoadmapNav from './RoadmapNav.js';
import { useNavigate } from 'react-router-dom';

export default function RoadmapHeader({selectedRoadmapStatus, setSelectedRoadmapStatus, statusArray}) {

    const navigate = useNavigate();

    function handleBackClick(event) {
        event.preventDefault();
        navigate('/');
    }

    function handleNewFeedbackClick(event) {
        event.preventDefault();
        navigate('../feedback/new');
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
                <button onClick={(e) => handleNewFeedbackClick(e)} className={styles.roadmapHeader_addButton}><h4><PlusIcon /> Add Feedback</h4></button>
            </header>
            <RoadmapNav selectedRoadmapStatus={selectedRoadmapStatus} setSelectedRoadmapStatus={setSelectedRoadmapStatus} statusArray={statusArray}/>
        </>
    )
}