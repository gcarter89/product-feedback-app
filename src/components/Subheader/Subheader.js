import styles from './subheader.module.scss';
import {ReactComponent as UpIcon} from '../../assets/shared/icon-arrow-down.svg';
import {ReactComponent as CheckIcon} from '../../assets/shared/icon-check.svg';
import { useState } from 'react';

export default function Subheader() {

    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const filterList = ['Most Upvotes', 'Least Upvotes', 'Most Comments', 'Least Comments'];

    function handleClick(event, index) {
        event.preventDefault();
        setSelectedIndex(index);
        setIsFilterOpen(false);
    }

    return (
        <div className={styles.subheader}>
            <div className={styles.subheader_dropdown}>
                <p className='_body3'>Sort by : <strong className={styles.subheader_selector} onClick={() => setIsFilterOpen(!isFilterOpen)}>{filterList[selectedIndex]} <UpIcon /></strong></p>
                {isFilterOpen &&
                    <ul className={styles.subheader_selectionMenu}>
                        {filterList.map((elem, index) => {
                            return (
                                <li key={index} onClick={(e) => handleClick(e, index)}>
                                    {selectedIndex === index ? 
                                        <><p  className='_body1'>{elem}</p> <CheckIcon /></>
                                        : <p className='_body1'>{elem}</p>}
                                    
                                    
                                </li>
                            )
                        })}
                    </ul>}
            </div>
        </div>
    )
}