import styles from './dashboard.module.scss';
import CategoryButton from '../../../components/CategoryButton/CategoryButton.js'
import { useNavigate } from 'react-router-dom';

export default function Dashboard({featureArray = [], selectedCategory, setSelectedCategory, setDashboardOpen, statusArray = []}) {
    
    const navigate = useNavigate()

    function handleClick(event) {
        event.preventDefault();
        setDashboardOpen(false);
        navigate('roadmap')
    }

    const children = statusArray.map((elem, index) => {
        let dotStyle;

        if (elem[0].toLowerCase() === 'planned') {
            dotStyle = styles.dashboard_roadmapList_item__planned;
        }

        if (elem[0].toLowerCase() === 'in-progress') {
            dotStyle = styles.dashboard_roadmapList_item__inprogress;
        }

        if (elem[0].toLowerCase() === 'live') {
            dotStyle = styles.dashboard_roadmapList_item__live;
        }


        return (
            <li key={index} className={styles.dashboard_roadmapList_item}>
                <div className={styles.dashboard_roadmapList_grouping}>
                    <div className={dotStyle}></div>
                    <p className='_body2'>{elem[0]}</p>
                </div>
                <p className={styles.dashboard_roadmapList_count}>{elem[1]}</p>
            </li>
        )
    })


    return (
        <div className={styles.overlay}>
            <div className={styles.dashboard}>
                <div className={styles.dashboard_categoryCard}>
                    {featureArray.map((elem, index) => {
                        return (
                            selectedCategory === elem ? <CategoryButton key={index} category={elem} selected={true} setSelectedCategory={setSelectedCategory} /> : <CategoryButton key={index} category={elem} setSelectedCategory={setSelectedCategory} />
                        )
                    })}
                </div>
                <div className={styles.dashboard_roadmapCard}>
                    <div className={styles.dashboard_roadmapHeading}>
                        <h3 className={styles.dashboard_roadmapHeading_heading}>Roadmap</h3>
                        <button onClick={(e) => handleClick(e)} className={styles.dashboard_roadmapHeading_link}>View</button>
                    </div>

                    <ul className={styles.dashboard_roadmapList}>
                        {children}
                    </ul>
                </div>
            </div>
        </div>

    )
}