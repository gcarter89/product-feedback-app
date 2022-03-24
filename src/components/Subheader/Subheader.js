import styles from './subheader.module.scss';
import {ReactComponent as UpIcon} from '../../assets/shared/icon-arrow-down.svg';
import {ReactComponent as PlusIcon} from '../../assets/shared/icon-plus.svg';
import { useState } from 'react';
import Dropdown from '../Dropdown/Dropdown.js';

export default function Subheader({selectedIndex, setSelectedIndex}) {

    const [isFilterOpen, setIsFilterOpen] = useState(false);

    const dropdownList = ['Most Upvotes', 'Least Upvotes', 'Most Comments', 'Least Comments'];


    function handleClick(event, index) {
        event.preventDefault();
        setSelectedIndex(index);
        setIsFilterOpen(false);
    }

    return (
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
    )
}