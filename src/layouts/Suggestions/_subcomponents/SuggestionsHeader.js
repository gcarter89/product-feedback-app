import Hamburger from "./Hamburger";
import Dropdown from "./Dropdown";
import {ReactComponent as PlusIcon} from '../../../assets/shared/icon-plus.svg';
import {ReactComponent as DownIcon} from '../../../assets/shared/icon-arrow-down.svg';
import styles from './suggestionsheader.module.scss';
import { useState } from "react";
import { useNavigate } from "react-router-dom";



export default function SuggestionsHeader({dashboardOpen, setDashboardOpen, selectedIndex, setSelectedIndex}) {

    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const dropdownList = ['Most Upvotes', 'Least Upvotes', 'Most Comments', 'Least Comments'];

    const navigate = useNavigate()


    function handleDropdownClick(event, index) {
        event.preventDefault();
        setSelectedIndex(index);
        setIsFilterOpen(false);
    }

    function handleAddFeedbackClick(event) {
        event.preventDefault();
        navigate('feedback/new');
    }



    return (
        <>
            <header className={styles.header}>
                <div>
                    <h4>Frontend Mentor</h4>
                    <p className='_body3'>Feedback Board</p>
                </div>
                <Hamburger dashboardOpen={dashboardOpen} setDashboardOpen={setDashboardOpen} />
            </header>

            <div className={styles.subheader}>
                <div className={styles.subheader_selectedOption}>
                    <p className='_body3'>Sort by : <strong className={styles.subheader_selector} onClick={() => setIsFilterOpen(!isFilterOpen)}>{dropdownList[selectedIndex]} <DownIcon /></strong></p>
                    {isFilterOpen &&
                        <Dropdown selectionArr={dropdownList} selectedIndex={selectedIndex} selectHandler={handleDropdownClick} />
                    }
                </div>
                <button onClick={(e) => handleAddFeedbackClick(e)} className={styles.subheader_button}>
                    <h4><PlusIcon /> Add Feedback</h4>
                </button>
            </div>
        </>
    )
}