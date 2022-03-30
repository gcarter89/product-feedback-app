import styles from '../header.module.scss'
import Hamburger from './Hamburger.js'
import {ReactComponent as UpIcon} from '../../../assets/shared/icon-arrow-down.svg';
import {ReactComponent as PlusIcon} from '../../../assets/shared/icon-plus.svg';
import Dropdown from '../../Dropdown/Dropdown.js';
import { useState } from 'react';


export default function DropdownHeader({selectedIndex, setSelectedIndex, dashboardOpen, setDashboardOpen}) {

    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const dropdownList = ['Most Upvotes', 'Least Upvotes', 'Most Comments', 'Least Comments'];

    function handleClick(event, index) {
        event.preventDefault();
        setSelectedIndex(index);
        setIsFilterOpen(false);
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
                    <p className='_body3'>Sort by : <strong className={styles.subheader_selector} onClick={() => setIsFilterOpen(!isFilterOpen)}>{dropdownList[selectedIndex]} <UpIcon /></strong></p>
                    {isFilterOpen &&
                        <Dropdown selectionArr={dropdownList} selectedIndex={selectedIndex} selectHandler={handleClick} />
                    }
                </div>
                <button className={styles.subheader_button}>
                    <h4><PlusIcon /> Add Feedback</h4>
                </button>
            </div>
        </>
    )
}