import styles from './subheader.module.scss';
import {ReactComponent as UpIcon} from '../../assets/shared/icon-arrow-down.svg';

export default function Subheader() {
    return (
        <div className={styles.subheader}>
            <div className={styles.subheader_dropdown}>
                <p className='_body3'>Sort by : <strong>Most Upvotes <UpIcon /></strong></p>
                {/* <ul>
                    <li>
                        <p className='_body1'>Most Upvotes</p>
                    </li>
                    <li>
                        <p className='_body1'>Least Upvotes</p>
                    </li>
                    <li>
                        <p className='_body1'>Most Comments</p>
                    </li>
                    <li>
                        <p className='_body1'>Least Comments</p>
                    </li>
                </ul> */}
            </div>
        </div>
    )
}