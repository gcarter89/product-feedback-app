import styles from './editfeedbackcard.module.scss';
import {ReactComponent as DownIcon} from '../../../assets/shared/icon-arrow-down.svg';
import {ReactComponent as CheckIcon} from '../../../assets/shared/icon-check.svg';
import { useState } from 'react';

export default function NewFeedbackDropdown({array, selected, handleSelect}) {
    const [dropdownVisible, setDropdownVisible] = useState(false);

    function handleDropdownClick(event) {
        event.preventDefault();
        setDropdownVisible(prevState => !prevState);
    }

    return (
        <>
            <div onClick={(e) => handleDropdownClick(e)} className={styles.editFeedbackCard_dropdown}>
                <p className='_body3'>{selected}</p>
                <DownIcon />
            </div>
            {dropdownVisible && <ul className={styles.editFeedbackCard_dropdownList}>
                {array.map((elem, index) => {
                    return (
                        selected === elem ?
                            <li key={index} onClick={(e) => handleSelect(e, elem, setDropdownVisible)} className={styles.editFeedbackCard_dropdownListItem}><p className='_body3'>{elem}</p><CheckIcon /></li>
                            :
                            <li key={index} onClick={(e) => handleSelect(e, elem, setDropdownVisible)} className={styles.editFeedbackCard_dropdownListItem}><p className='_body3'>{elem}</p></li>
                    )
                })}
            </ul>}
        </>
    )
}