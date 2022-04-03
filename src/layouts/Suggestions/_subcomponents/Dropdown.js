import {ReactComponent as CheckIcon} from '../../../assets/shared/icon-check.svg';
import styles from './dropdown.module.scss'


export default function Dropdown({selectionArr, selectHandler, selectedIndex}) {

    return (
            <ul className={styles.dropdown}>
                {selectionArr.map((elem, index) => {
                    return (
                        <li className={styles.dropdown_listItem} key={index} onClick={(e) => selectHandler(e, index)}>
                            {selectedIndex === index ? 
                                <><p  className='_body1'>{elem}</p> <CheckIcon /></>
                                : <p className='_body1'>{elem}</p>}     
                        </li>
                    )
                })}
            </ul>
    )
}