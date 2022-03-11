import styles from './header.module.scss';
import Hamburger from './_subcomponents/Hamburger';

export default function Header() {
    return (
        <header className={styles.header}>
            <div>
                <h4>Frontend Mentor</h4>
                <p className='_body3'>Feedback Board</p>
            </div>
            <Hamburger />
        </header>
    )
}